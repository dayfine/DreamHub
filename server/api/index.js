const router = require('express').Router();

router.use('/auth', require('./auth'))
router.use('/goals', require('./goals'))
router.use(`/goals/${goalId}/tasks`, require('./tasks'))
router.use('/friends', require('./friends'))
router.use('/category', require('./category'))

module.exports = router;
