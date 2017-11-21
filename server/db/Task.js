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

Task.editTask = function(id, reqBody) {
  return Task.findById(id)
    .then(task => {
      Object.assign(task, reqBody);
      return task.save();
    });
};

Task.deleteTask = function(id) {
  return Task.findById(id)
    .then(task => task.destroy());
};

module.exports = Task;
