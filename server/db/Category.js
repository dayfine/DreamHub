const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Category = conn.define('category', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

/**
 *
    Traveling
    Learning

    Exercises
    Social & Families
    Meditation
    Cooking
    Reading & Writing
*/

module.exports = Category
