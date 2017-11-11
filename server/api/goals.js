const router = require('express').Router();
const { Goal } = require('../db').models;

router.get('/', (req, res, next) => {
  Goal.getGoals(req.body.userId)
    .then(goals => res.send(goals))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Goal.addGoal(req.body.userId, req.body)
    .then(goal => res.send(goal))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Goal.editGoal(req.params.id, req.body.userId, req.body)
    .then(goal => res.send(goal))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Goal.deleteGoal(req.params.id, req.body.userId)
    .then(() => res.sendStatus(201))
    .catch(next);
});

module.exports = router;

