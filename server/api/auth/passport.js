const bcrypt = require('bcrypt'),
      passport = require('passport'),
      JwtStrategy = require('passport-jwt').Strategy,
      { ExtractJwt } = require('passport-jwt'),
      LocalStrategy = require('passport-local').Strategy,
      { JWT_SECRET } = require('./secrets'),
      { User } = require('../../db').models;

// JSON Web Tokens Strategy
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: JWT_SECRET
}, (payload, done)=> {
    User.findById(payload.sub)
      .then(user => {
        if(!user) return done(null, false);// can this be removed since the catch will catch it?
        done(null, user);
      })
      .catch(done)
  }
));

// Local Strategy
passport.use(new LocalStrategy({
  usernameField: 'email'
}, (email, password, done)=> {
  User.findOne({ where: { email } })
    .then(user => {
      if(!user) return done(null, false); //same as above?
      User.isValidPassword(password)
        .then(correctPW => correctPW ? done(null, user) : done(null, false))
        .catch(done);//Is this working?
    })
}));

// Google OAuth