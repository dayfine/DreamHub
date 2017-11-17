const
  router = require('express').Router(),
  { User } = require('../../db').models,
  passport = require('passport'),
  passportJWT = require("passport-jwt"),
  ExtractJwt = passportJWT.ExtractJwt,
  JwtStrategy = passportJWT.Strategy,
  jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeader,
    secretOrKey: process.env.SECRET
  }

passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done)
})

router
  .use(passport.initialize())

  .get('/me', (req, res, next) => {
    const token = req.headers.auth
    try {
      const id = jwt.decode(token, SECRET).id
      User.findById(id)
      .then(user => res.send(user))
      .catch(next)
    } catch (e) {
      res.sendStatus(401)
    }
  })

  .delete('/', (req, res, next) => {
    req.session.destroy()
    res.sendStatus(204)
  })

  .post('/login', (req, res, next) => {
    User.login(req.body)
    .then(user => {
      req.session.userId = user.id
      res.send(user)
    })
    .catch(next)
  })

  .post('/signup', (req, res, next) => {
    User.signup(req.body)
    .then(user => {
      req.session.userId = user.id
      res.send(user)
    })
    .catch(next)
  })

  .post('/tokens', (req, res, next) => {
    const credentials = req.body;
    const { username, password } = credentials;
    const user = users.find( user => user.username === username && user.password === password);
    if(user){
      return res.send({ token: jwt.encode({ id: user.id }, SECRET) });
    }
    return res.sendStatus(401);
  })

  .use('/google', require('./oauth-google'))

module.exports = router
