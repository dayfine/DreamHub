const router = require('express').Router();
const { Goal } = require('../db').models;

router.get('/', (req, res, next) => {
  Goal.getGoals(req.body.userId)
    .then(goals => res.send(goals))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Goal.getGoalById(req.params.id * 1)
    .then(goal => res.send(goal))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Goal.addGoal(req.body)
    .then(goal => res.send(goal))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Goal.editGoal(req.params.id, req.body.userId, req.body)
    .then(goal => res.send(goal))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Goal.deleteGoal(req.params.id, 1) // userId hardcoded
    .then(() => res.sendStatus(202))
    .catch(next);
});

module.exports = router;

