const conn = require('./conn')
const User = require('./User')
const Goal = require('./Goal')
const Task = require('./Task')
const Category = require('./Category')

Goal.belongsTo(Category)
Category.hasMany(Task)

Goal.belongsTo(User)
User.hasMany(Goal)

Task.belongsTo(Goal)
Goal.hasMany(Task)

User.belongsToMany(User, { as: 'Friend', through: 'UserFriend' })
// User.hasMany(User, { as: 'friends', foreignKey: 'friendId' })

const sync = () => conn.sync({ force: true })
const seed = () => require('../seed')(User, Goal, Task, Category)

module.exports = {
  sync,
  seed,
  models: {
    User,
    Goal,
    Task
  }
}
