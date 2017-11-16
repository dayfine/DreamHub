const router = require('express').Router()

router.use('/auth', require('./oauth'))
router.use('/friends', require('./friends'))

module.exports = router
