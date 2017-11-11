const router = require('express').Router();
const { Task } = require('../db').models;

router.get('/', (req, res, next) => {
  Task.getTasks(req.body.userId)
    .then(tasks => res.send(tasks))
    .catch(next);
  });
});

router.post('/', (req, res, next) => {
  Task.addTask(req.body.userId, req.body)
    .then(task => res.send(task))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Task.editTask(req.params.id, req.body.userId, req.body)
    .then(task => res.send(task))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Task.deleteTask(req.params.id, req.body.userId)
    .then(() => res.sendStatus(201))
    .catch(next);
});

module.exports = router;
