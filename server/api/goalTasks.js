const router = require('express').Router();
const { Goal, Task } = require('../db').models;

// Not using at the moment
// router.get('/', (req, res, next) => {
//   Goal.getGoals(req.body.userId)
//     .then(goals => res.send(goals))
//     .catch(next);
// });

router.get('/:id', (req, res, next) => {
  Goal.findById(req.params.id, { include: [ Task ] })
    .then(goal => res.send(goal))
    .catch(next);
});

// Works
router.post('/', (req, res, next) => {
  Goal.create(req.body)
    .then(goal => res.send(goal))
    .catch(next);
});

// Works
router.put('/:id', (req, res, next) => {
  Goal.findById(req.params.id)
    .then(goal => goal.update(req.body))
    .then(_goal => res.send(_goal))
    .catch(next);
});

// Works
router.delete('/:id', (req, res, next) => {
  Goal.findById(req.params.id)
    .then(goal => goal.destroy())
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
  Goal.createTask(req.params.id, req.body)
    .then(goal => res.send(goal))
    .catch(next);
});

router.put('/:id/tasks/:taskId', (req, res, next) => {
  console.log(req.body)
  Task.editTask(req.params.taskId, req.body)
    .then(task => res.send(task))
    .catch(next);
});

router.delete('/:id/tasks/:taskId', (req, res, next) => {
  Task.deleteTask(req.params.taskId)
    .then(() => res.sendStatus(201))
    .catch(next);
});

module.exports = router;

