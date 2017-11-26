const
  router = require('express').Router(),
  { User } = require('../../db').models,
  jwt = require('jsonwebtoken'),
  jwtAuth = require('./jwt-middleware')(),
  secret = process.env.SECRET

router
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

  // .get('/me', (req, res, next) => {
  //   const token = req.headers.auth
  //   try {
  //     const id = jwt.decode(token, SECRET).id
  //     User.findById(id)
  //     .then(user => res.send(user))
  //     .catch(next)
  //   } catch (e) {
  //     res.sendStatus(401)
  //   }
  // })

  // .post('/login', (req, res, next) => {
  //   console.log(req.body)
  //   User.login(req.body)
  //   .then(user => {
  //     req.session.userId = user.id
  //     res.send(user)
  //   })
  //   .catch(next)
  // })

  .post('/signup', (req, res, next) => {
    console.log(req.body)
    User.signup(req.body)
    .then(user => {
      req.session.userId = user.id
      res.send(user)
    })
    .catch(next)
  })

  .use('/google', require('./oauth-google'))

module.exports = router
