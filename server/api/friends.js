const router = require('express').Router()
const { User } = require('../db').models
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

// /api/friends

router.use('/', (req, res, next) => {
  const token = req['headers'].authorization.split(' ')[1]
  jwt.verify(token, secret, function (err, decoded) {
  	if (err) return next(err)
  	console.log('no error')
  	return User.findById(decoded.id)
	  	.then(user => {
	  		req.user = user
	  		next()
	  	})
  })
})

// get all friends
router.get('/', (req, res, next) => {
  console.log('im in /friends')
  return User.getFriends() // where friendId = logged in id
		.then(users => {
  res.send(users)
})
		.catch(next)
})

// get all friends from logged in user
// router.get('/friends', (req, res, next) => {
	// if (req.session.userId) {
		// User.findOne({
		// 	where: { userId: req.session.userId },
		// 	include: {
		// 		model: User,
		// 		include: UserFriend
		// 	}
		// })
		// 	.then(friends => {
		// 		res.send(friends);
		// 	})
		// 	.catch(next)
	// }
	// else {
	// 	res.send('not logged in');
	// }
// })
// get all friends

// add new friend
router.post('/:friendId', (req, res, next) => {
  return User.findById(req.params.id)
	.then(newFriend => {
  User.addFriends(newFriend)// where friendId = logged in id
  res.send(newFriend)
})
	.catch(next)
})

// search user by email
router.get('/email/:email', (req, res, next) => {
  return User.findOne({
    where: { email: req.params.email}
  })
	.then(friend => {
  if (friend) {
			// console.log('routeeeeee ' + friend)
    return User.addFriends(friend)
			// .then(()=> res.redirect('/'));
  }		else {
    return res.send('user not found')
  }
})
	.catch(next)
})

router.delete('/:friendId', (req, res, next) => {
  console.log('got it')
  return User.findById(req.params.friendId)
    .then(friend => req.user.removeFriend(friend))
    .then(() => res.sendStatus(202))
    .catch(next)
})

module.exports = router
