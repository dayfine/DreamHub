const router = require('express').Router()
const { User, Goal } = require('../db').models
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

router
  .use('/', (req, res, next) => {
    const token = req['headers'].authorization.split(' ')[1]
    jwt.verify(token, secret, function (err, decoded) {
      if (err) return next(err)

      return User.findById(decoded.id)
        .then(user => {
          req.user = user
          next()
        })
    })
  })

  .get('/', (req, res, next) => {
    return req.user.getFriends({ include: [ Goal ] })
      .then(friends => res.send(friends))
      .catch(next)
  })

  .get('/email/:email', (req, res, next) => {
    return User.getFriendDataByEmail(req.params.email)
      .then(friend => res.send(friend))
      .catch(next)
  })

  .post('/:friendId', (req, res, next) => {
    return User.findById(req.params.friendId)
      .then(friend => req.user.addFriend(friend))
      .then(() => res.sendStatus(202))
      .catch(next)
  })

  .delete('/:friendId', (req, res, next) => {
    return User.findById(req.params.friendId)
      .then(friend => req.user.removeFriend(friend))
      .then(() => res.sendStatus(202))
      .catch(next)
  })

module.exports = router
