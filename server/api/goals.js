const router = require('express').Router();
const { Goal, Task } = require('../db').models;

router.get('/', (req, res, next) => {
  Goal.getGoals(req.body.userId)
    .then(goals => res.send(goals))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Goal.findById(req.params.id, { include: [ Task ] })
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

// Tasks

router.get('/:id/tasks', (req, res, next) => {
  Goal.findById(req.params.id, { include: [ Task ] })
    .then(goal => goal.getTasks())
    .then(tasks => res.send(tasks))
    .catch(next)
});

router.post('/:id/tasks', (req, res, next) => {
  Task.addTask(req.body)
    .then(task => res.send(task))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Task.editTask(req.params.id, req.body)
    .then(task => res.send(task))
    .catch(next);
});

router.delete('/:goalId/tasks/:id', (req, res, next) => {
  Task.deleteTask(req.params.goalId, req.params.id)
    .then(() => res.sendStatus(201))
    .catch(next);
});

module.exports = router;

