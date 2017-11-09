const conn = require('./conn')
const User = require('./Users')
const Goal = require('./Goal')
const Task = require('./Task')

Goal.belongsTo(User);
User.hasMany(Goal);

Task.belongsTo(Goal);
Goal.hasMany(Task);

const sync = () => conn.sync({ force: true })
const seed = () => {
  Promise.all([
    User.create({ name: 'John' }),
    Goal.create({ title: 'Travel', description: 'Want to go to Burundi' }),
    Task.create({ title: 'Book flight to Burundi' })
  ])
  .then(([ u1, g1, t1 ]) => {
    u1.addGoal(g1);
    g1.addTask(t1);
  })
}

module.exports = {
  sync,
  seed,
  models: {
    User,
    Goal,
    Task
  }
}
