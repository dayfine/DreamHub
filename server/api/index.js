const router = require('express').Router();

router.use('/auth', require('./oauth'));

module.exports = router;