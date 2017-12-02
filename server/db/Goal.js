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
  },
  affirmations: {
    type: Sequelize.STRING
  },
  deadline: {
    type: Sequelize.DATEONLY
  },
  importance: {
    type: Sequelize.INTEGER,
    defaultValue: 5
  },
  measurement: {
    type: Sequelize.STRING
  },
  reasons: {
    type: Sequelize.TEXT
  }
})

Goal.createGoalTasksFromObj = function (obj) {
  // obj expects to include an array of tasks
  return Goal.create(obj, {include: [ Task ]})
}

module.exports = Goal
