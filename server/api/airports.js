const router = require('express').Router();
const db = require('../airports-db');

router.get('/', (req, res, next) => {
  db.list()
    .then(airports => res.send(airports))
    .catch(next)
});

module.exports = router;
