const conn = require('./conn');
const Sequelize = conn.Sequelize;

const User = conn.define('user', {
  name: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  }
});

module.exports = User;
