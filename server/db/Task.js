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

module.exports = Task;
