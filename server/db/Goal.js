const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Goal = conn.define('goal', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Goal;
