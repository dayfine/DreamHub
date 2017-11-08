const router = require('express').Router()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const googleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
}

const { User } = require('../db').models
// const { loadDataOnLogin } = require('./helpers/session-helper')

router.use(passport.initialize())
router.use(passport.session())

// passport sends back a 'done' method
const strategy = new GoogleStrategy(googleConfig, (token, refreshToken, profile, done) => {
  const
    googleId = profile.id,
    name = profile.displayName,
    email = profile.emails[0].value

  User.find({where: {googleId}})
    .then(user => user
      ? done(null, user)
      : User.create({name, email, googleId})
        .then(user => done(null, user))
    )
    .catch(done)
})

passport.use(strategy)

passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done)
})

router
  .get('/google', passport.authenticate('google', {scope: 'email'}))

  .get('/google/callback', passport.authenticate('google', {
    successRedirect: '/account',
    failureRedirect: '/login'
  }))

module.exports = router
