const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Task = conn.define('task', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  dueDate: {
    type: Sequelize.DATE
  },
  priority: {
    type: Sequelize.INTEGER
  }
});

module.exports = Task;
