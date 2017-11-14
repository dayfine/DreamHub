const router = require('express').Router();

// /api/users

// get all users
router.get('/', (req, res, next) => {
	User.findAll()
		.then(users => {
			res.send(users)
		})
		.catch(next)
});

// get all friends from logged in user
router.get('/friends', (req, res, next) => {
	// if (req.session.userId) {
		User.findOne({
			where: { userId: req.session.userId },
			include: {
				model: User,
				include: UserFriend
			}
		})
			.then(friends => {
				res.send(friends);
			})
			.catch(next)
	// }
	// else {
	// 	res.send('not logged in');
	// }
})


router.get('/currentUser', (req, res, next) => {
	if (req.session.userId) {
		User.findById(req.session.userId)
		.then( user => {
			res.send(user);
		})
		.catch(next);
	}
})

module.exports = router;
