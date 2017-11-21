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
  },
  progress: {
    // 'Current', 'Accomplished', 'Stalled' 'Abandoned'
    type: Sequelize.STRING,
    defaultValue: 'Current'
  },
  budget: {
    type: Sequelize.INTEGER
  }
});

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
