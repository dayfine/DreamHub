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
      name = profile.displayName,
      email = profile.emails[0].value

    console.log(profile)

    User.find({where: {googleId}})
      .then(user => user
        ? done(null, user)
        : User.create({name, email, googleId})
          .then(user => done(null, user))
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
