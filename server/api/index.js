const router = require('express').Router()

// TO DO:
const goalId = 1; // hardcoded for now

router.use('/auth', require('./auth'))
router.use('/goals', require('./goals'))
router.use(`/goals/${goalId}/tasks`, require('./tasks'))
router.use('/friends', require('./friends'))
router.use('/category', require('./category'))

module.exports = router
