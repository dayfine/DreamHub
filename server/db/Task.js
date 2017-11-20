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
    type: Sequelize.DATEONLY
  },
  priority: {
    type: Sequelize.STRING,
    defaultValue: 'Medium'
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'Created'
  }
});

Task.getTasks = function() {
  return Task.findAll();
};

Task.addTask = function(reqBody) {
  console.log(reqBody)
  return Task.create(Object.assign({}, reqBody));
};

Task.editTask = function(goalId, id, reqBody) {
  return Task.findOne({ where: { goalId, id } })
    .then(task => {
      Object.assign(task, reqBody);
      return task.save();
    });
};

Task.deleteTask = function(goalId, id) {
  return Task.findOne({ where: { goalId, id } })
    .then(task => task.destroy());
};

module.exports = Task;
