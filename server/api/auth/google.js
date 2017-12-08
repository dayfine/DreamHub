const
  router = require('express').Router(),
  passport = require('passport'),
  { User } = require('../../db').models,
  jwt = require('jsonwebtoken'),
  secret = process.env.SECRET,
  GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
  googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  strategy = new GoogleStrategy(googleConfig, (token, refreshToken, profile, done) => {
    const
      googleId = profile.id,
      name = profile.displayName || `Google User ${googleId}`.slice(0, 30),
      email = profile.emails[0].value,
      id = googleId.slice(0, 10)

    console.log(profile)

    User.find({where: {googleId}})
      .then(user => user
        ? done(null, user)
        : User.create({id, name, email, googleId})
          .then(_user => done(null, _user))
      )
      .catch(done)
  })

passport.use(strategy)

router
  .get('/',
        passport.authenticate('google', {scope: 'email'}),
        (req, res, next) => {
          console.log('hitting it!!!!')
          console.log(req)
          next()
        }
  )

  .get('/callback',
        passport.authenticate('google', { session: false }),
        (req, res, next) => {
          if (!req.user) return res.sendStatus(403)

          console.log(req.user)
          const paylod = {id: req.user.id}
          const token = jwt.sign(paylod, secret)
          res.send(token)
        }
  )

module.exports = router
