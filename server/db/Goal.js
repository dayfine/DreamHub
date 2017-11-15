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

Goal.getGoals = function(userId) {
  return Goal.findAll({/*{ where: { userId }}*/});
};

Goal.addGoal = function(reqBody) {
  return Goal.create(Object.assign({}, reqBody));
};

Goal.editGoal = function(id, userId, reqBody) {
  return Goal.findOne({ where: { id, userId } })
    .then(goal => {
      Object.assign(goal, reqBody);
      return goal.save();
    });
};

Goal.deleteGoal = function(id, userId) {
  return Goal.findOne({ where: { id, userId } })
    .then(goal => goal.destroy());
};

module.exports = Goal;
