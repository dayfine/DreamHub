const
  router = require('express').Router(),
  { User } = require('../../db').models,
  jwt = require('jsonwebtoken'),
  jwtAuth = require('./jwt-middleware')(),
  secret = process.env.SECRET

router
  .use('/google', require('./oauth-google'))

  .use(jwtAuth.initialize())

  .get('/me', jwtAuth.authenticate(), (req, res, next) => {
    res.send(req.user)
  })

  .post('/login', (req, res, next) => {
    const credentials = req.body

    User.login(credentials)
      .then(user => {
        if (user) {
          const paylod = {id: user.id}
          const token = jwt.sign(paylod, secret)
          res.send(token)
        } else {
          res.sendStatus(401)
        }
      })
      .catch(next)
  })

  .post('/signup', (req, res, next) => {
    User.signup(req.body)
      .then(user => {
        const paylod = {id: user.id}
        const token = jwt.sign(paylod, secret)
        res.send(token)
      })
      .catch(next)
  })

module.exports = router
