const conn = require('./conn')
const User = require('./Users')
const Goal = require('./Goal')
const Task = require('./Task')

Goal.belongsTo(User);
User.hasMany(Goal);

Task.belongsTo(Goal);
Goal.hasMany(Task);

User.belongsToMany(User, { as: 'friend', through: 'UserFriend' });
User.hasMany(User, { as: 'friends', foreignKey: 'friendId' });

const sync = () => conn.sync({ force: true })
const seed = () => {
  Promise.all([
    User.create({ name: 'Anthony' }),
    User.create({ name: 'Burcu' }),
    User.create({ name: 'Di' }),
    User.create({ name: 'Jerry' }),
    Goal.create({ title: 'Travel', description: 'Want to go to Burundi' }),
    Task.create({ title: 'Book flight to Burundi' })
  ])
  .then(([ u1, u2, u3, u4, g1, t1 ]) => {
    u1.addGoal(g1);
    u1.addFriends(u3);
    u2.addFriends(u3);
    u1.addFriends(u4);
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
