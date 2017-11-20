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
  strategy = new JwtStrategy(jwtOptions, (payload, done) => {
    const { id } = payload
    User.getUserDataById(id)
      .then(user => done(null, user || false))
      .catch(done)
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
