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
// Not using at the moment
// router.get('/:id/tasks', (req, res, next) => {
//   Goal.findById(req.params.id, { include: [ Task ] })
//     .then(goal => goal.getTasks())
//     .then(tasks => res.send(tasks))
//     .catch(next)
// });

// Works
router.post('/:id/tasks', (req, res, next) => {
  Task.create(req.body)
    .then(task => res.send(task))
    .catch(next);
});

// Works
router.put('/:id/tasks/:taskId', (req, res, next) => {
  console.log(req.body)
  Task.findById(req.params.taskId)
    .then(task => task.update(req.body))
    .then(_task => res.send(_task))
    .catch(next);
});

// Works
router.delete('/:id/tasks/:taskId', (req, res, next) => {
  return Task.findById(req.params.taskId)
    .then(task => task.destroy())
    .then(() => res.sendStatus(201))
    .catch(next);
});

module.exports = router;
