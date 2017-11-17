const router = require('express').Router();
const jwt = require('jsonwebtoken');
//const env = require('./env');

const userData = {
  id: 1,
  name: 'John',
  email: 'john@johnsgmail.com',
  password: 'fishsticks'
};

const testData = {
  1: 'Hello world',
  2: 'Eating chicken'
}

router.post('/auth', (req, res, next)=> {
  const { email, password } = req.body;
  
  if(email === userData.email && password === userData.password){
    const user = {
      id: userData.id,
      email: userData.email
    };
    
    const token = jwt.sign({ user }, 'tempsecrettobeputinenvfile');
    return res.send(token)// does this need to be returned? to escape out?
  }
  return res.sendStatus(403);
});

const ensureAuth = (req, res, next)=> {
  const token = req.headers['authorization'];
  //bearer etc
  if(token){
    const key = token.split(' ')[1];
    
    jwt.verify(key. 'tempsecrettobeputinenvfile', (err, data)=> {
      if(err) return res.sendStatus(403);
      req.user = data.user;//
      next();
    });
  } else {
    res.sendStatus(403);
  }
};

router.get('/data', ensureAuth, (req, res, next)=> {
  console.log(req.user)//
  res.send(testData[req.user.id]);
})

module.exports = router;