const router = require('express').Router();
const { User } = require('../db').models;

// /api/users

// get all friends
router.get('/', (req, res, next) => {
	User.getFriends() //where friendId = logged in id
		.then(users => {
			res.send(users)
		})
		.catch(next)
});

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


module.exports = router;
