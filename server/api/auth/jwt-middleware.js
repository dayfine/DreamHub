const
  { User } = require('../../db').models,
  passport = require('passport'),
  passportJWT = require('passport-jwt'),
  ExtractJwt = passportJWT.ExtractJwt,
  JwtStrategy = passportJWT.Strategy,
  jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
  },
  strategy = new JwtStrategy(jwtOptions, (jwt_payload, done) => {
    User.findbyId(jwt_payload.id)
      .then(user => done(null, user || false))
      .catch(err => done(err, false))
  })

module.exports = () => {
  passport.use(strategy)
  return {
    initialize () {
      return passport.initialize()
    },
    authenticate () {
      return passport.authenticate('jwt', {session: false})
    }
  }
}
