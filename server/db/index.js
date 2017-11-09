const conn = require('./conn')
const User = require('./Users')
const Goal = require('./Goal')

Goal.belongsTo(User);
User.hasMany(Goal);

const sync = () => conn.sync({ force: true })
const seed = () => {
  Promise.all([
    User.create({ name: 'John' }),
    Goal.create({ title: 'Travel', description: 'Want to go to Burundi' })
  ])
  .then(([ u1, g1 ]) => {
    u1.addGoal(g1)
  })
}

module.exports = {
  sync,
  seed,
  models: {
    User,
    Goal
  }
}
