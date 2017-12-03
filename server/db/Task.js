const conn = require('./conn');
const Sequelize = conn.Sequelize;

// See constant.js in client/src for the expected values of priortiy and status
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
  priorityValue: {
      type: Sequelize.INTEGER,
      defaultValue: 50
  },
  priorityText: {
    type: Sequelize.STRING,
    defaultValue: 'Medium'
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'Created'
  }
});

module.exports = Task;
