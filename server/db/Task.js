const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Task = conn.define('task', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  dueDate: {
    type: Sequelize.DATE
  },
  priority: {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'Created'
  }
});

Task.getTasks = function(goalId) {
  return Task.findAll({ where: { goalId } });
};

Task.addTask = function(goalId, reqBody) {
  return Task.create(Object.assign({}, { goalId }, req.body));
};

Task.editTask = function(id, goalId, reqBody) {
  return Task.findOne({ where: { id, goalId } })
    .then(task => {
      Object.assign(task, reqBody);
      return task.save();
    });
};

Task.deleteTask = function(id, goalId) {
  return Task.findOne({ where: { id, goalId } })
    .then(task => task.destroy());
};

module.exports = Task;
