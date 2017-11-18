const router = require('express').Router()

// TO DO:
const goalId = 1; // hardcoded for now

router.use('/auth', require('./oauth'))
router.use('/goals', require('./goals'))
router.use(`/goals/${goalId}/tasks`, require('./tasks'))
router.use('/friends', require('./friends'))

module.exports = router
