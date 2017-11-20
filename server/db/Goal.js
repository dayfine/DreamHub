const conn = require('./conn');
const Sequelize = conn.Sequelize;
const { Task } = require('./Task');

const Goal = conn.define('goal', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
});

Goal.getGoals = function(userId) {
  return Goal.findAll({/*{ where: { userId }}*/});
};

Goal.addGoal = function(reqBody) {
  return Goal.create(Object.assign({}, reqBody));
};

Goal.editGoal = function(id, userId, reqBody) {
  return Goal.findOne({ where: { id, userId }})
    .then(goal => {
      Object.assign(goal, reqBody);
      return goal.save();
    });
};

Goal.deleteGoal = function(id, userId) {
  return Goal.findOne({ where: { id, userId }})
    .then(goal => goal.destroy());
};

Goal.findGoal = function(id) {
  return Goal.findById(id)
    .then(goal => res.send(goal))
    .catch(next);
};

Goal.prototype.createTask = function(id, taskBody) {
  return Task.create(Object.assign({}, taskBody))
    .then(task => {
      Goal.findGoal(id)
        .then(goal => {
          goal.addTask(task);
          return goal.save();
        })
    })
};

module.exports = Goal;
