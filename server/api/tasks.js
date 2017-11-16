const router = require('express').Router();
const { Task } = require('../db').models;

router.get('/:goalId', (req, res, next) => {
  Task.getTasks(req.params.goalId)
    .then(tasks => res.send(tasks))
    .catch(next);
});

router.post('/:goalId', (req, res, next) => {
  Task.addTask(req.params.goalId, req.body)
    .then(task => res.send(task))
    .catch(next);
});

router.put('/:goalId/:id', (req, res, next) => {
  Task.editTask(req.params.id, req.params.goalId, req.body)
    .then(task => res.send(task))
    .catch(next);
});

router.delete('/:goalId/:id', (req, res, next) => {
  Task.deleteTask(req.params.id, req.params.userId)
    .then(() => res.sendStatus(201))
    .catch(next);
});

module.exports = router;
