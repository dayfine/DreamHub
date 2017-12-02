const conn = require('./conn')
const Sequelize = conn.Sequelize
const Task = require('./Task')

const Goal = conn.define('goal', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  progress: {
    // 'Current', 'Accomplished', 'Ready', 'Stalled' 'Abandoned'
    type: Sequelize.STRING,
    defaultValue: 'Current'
  },
  budget: {
    type: Sequelize.INTEGER
  }
})

Goal.createGoalTasksFromObj = function (obj) {
  // obj expects to include an array of tasks
  return Goal.create(obj, {include: [ Task ]})
}

module.exports = Goal
