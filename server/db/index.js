const conn = require('./conn')
const User = require('./Users')
const Goal = require('./Goal')
const Task = require('./Task')

Goal.belongsTo(User);
User.hasMany(Goal);

Task.belongsTo(Goal, { onDelete: 'cascade' });
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
    Goal.create({ title: 'Capstone', description: 'Finish capstone' }),
    Task.create({ title: 'Book flight to Burundi' }),
    Task.create({ title: 'Get MVP ready' })
  ])
  .then(([ u1, u2, u3, u4, g1, g2, t1, t2 ]) => {
    u1.addGoal(g1);
    u1.addFriends(u3);
    u2.addFriends(u3);
    u1.addFriends(u4);
    g1.addTask(t1);
    g2.addTask(t2);
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
