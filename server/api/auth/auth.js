const router = require('express').Router(),
      jwt = require('jsonwebtoken'),
      passport = require('passport'),
      passportConfig = require('./passport'),
      { JWT_SECRET } = require('./secrets'),
      { User, Goal, Task } = require('../../db').models;

//Functions
const signToken = user => {
  return jwt.sign({
    iss: 'DABJ',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1) 
  }, JWT_SECRET);
}

//Routes
router.post('/', (req, res, next)=> {
  const { name, email, password } = req.body;
  User.create({name, email, password })
    .then( user=> signToken(user))
    .then(token => res.json({ token }))
    .catch(next)
});

router.post('/signup', (req, res, next)=> {
  res.json({ hello: 'world'});
});

router.post('/login', passport.authenticate('local', {session: false}), (req, res, next)=> {
  console.log('Success. The User is stored in req.user');
  const token = signToken(req.user);
  res.json({ token })
});

router.get('/secret', passport.authenticate('jwt', { session: false }), (req, res, next)=> {
  res.json({ secret: 'You made it to the secret!?'});
});

module.exports = router;