const router = require('express').Router();
const { Task } = require('../db').models;

router.get('/', (req, res, next) => {
  Goals.getGoals(req.body.userId)
    .then(goals => res.send(goals))
    .catch(next);
  });
});

router.post('/', (req, res, next) => {
  Goals.addGoal(req.body.userId, req.body)
    .then(goal => res.send(goal))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Goals.editGoal(req.params.id, req.body.userId, req.body)
    .then(goal => res.send(goal))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Goals.deleteGoal(req.params.id, req.body.userId)
    .then(() => res.sendStatus(201))
    .catch(next);
});

module.exports = router;
