const completedGoals = require('./seed-goal')

module.exports = (User, Goal, Task, Category) => {
  let users

  return Promise.all([
    User.create({ name: 'Anthony', password: 'anthony', email: 'anthony@cap.com' }, { include: [{ model: User, as: 'friends' }] }),
    User.create({ name: 'Burcu', password: 'burcu', email: 'burcu@cap.com' }, { include: [{ model: User, as: 'friends' }] }),
    User.create({ name: 'dayfine', password: 'di', email: 'di@cap.com' }, { include: [{ model: User, as: 'friends' }] }),
    User.create({ name: 'Jerry', password: 'jerry', email: 'jerry@cap.com' }, { include: [{ model: User, as: 'friends' }] }),
    User.create({ name: 'test', email: 'test@test.test', password: 'test' }, { include: [{ model: User, as: 'friends' }] }),
    User.create({ name: 'nofriend', password: 'nofriend', email: 'nofriend@cap.com' }, { include: [{ model: User, as: 'friends' }] })
  ])
  .then(_users => {
    users = _users
    return Promise.all([
      users[0].setFriends([users[2], users[3]]),
      users[1].setFriends(users[2]),
      users[4].setFriends([users[0], users[1], users[2], users[3]])
    ])
  })
  .then(() => {
    return Promise.all([
      Category.create({ name: 'Traveling', color: '#123456' }),
      Category.create({ name: 'Learning', color: '#a23ee2' }),
      Category.create({ name: 'Exercises', color: '#889a11' }),
      Category.create({ name: 'Social & Families', color: '#c3e3ff' }),
      Category.create({ name: 'Meditation', color: '#983444' }),
      Category.create({ name: 'Cooking', color: '#350318' }),
      Category.create({ name: 'Reading & Writing', color: '#27123a' })
    ])
  })
  .then(() => {
    return Promise.all([
      Goal.create({ title: 'Travel', description: 'Want to go to somewhere', userId: 1 }),
      Goal.create({ title: 'Travel to Peru', description: 'See Amazon & Machu Picchu!', userId: 2 }),
      Goal.create({ title: 'Travel', description: 'Want to go to Burundi', userId: 3 }),
      Goal.create({ title: 'Learn Spanish', description: 'Be conversant', userId: 2 }),
      Goal.create({ title: 'Own a house', description: 'American Dream', userId: 4 }),
      Goal.create({ title: 'Testie', description: 'American Drum', userId: 5 }),
      Goal.create({ title: 'Tastie', description: 'American Drim', userId: 5 }),
      Goal.create({ title: 'I am completed', description: '100% done', userId: 5, categoryId: 2, progress: 'Accomplished' })
    ])
  })
  .then(() => {
    return Promise.all([
      Task.create({ title: 'T1', description: 'Just somewhere!', goalId: 1 }),
      Task.create({ title: 'T1', description: 'Just somewhere!', goalId: 2 }),
      Task.create({ title: 'T2', description: 'Want to go to Burundi', goalId: 2 }),
      Task.create({ title: 'T3', description: 'Spanish alphabet...', goalId: 3 }),
      Task.create({ title: 'T4', description: 'Save some money', goalId: 4, status: 'Completed' }),
      Task.create({ title: 'T5', description: 'Test for goal5', goalId: 5 }),
      Task.create({ title: 'T6', description: 'Test for goal six', goalId: 6, status: 'Completed' }),
      Task.create({ title: 'T1', description: 'another five five', goalId: 5, status: 'Completed' }),
      Task.create({ title: 'T2', description: 'Five has five', goalId: 5 }),
      Task.create({ title: 'T3', description: 'Sixxxxxx', goalId: 6 }),
      Task.create({ title: 'T4', description: 'Liu - Test', goalId: 6, status: 'Completed' }),
      Task.create({ title: 'T5', description: 'Fiv, aseomw', goalId: 5 }),
      Task.create({ title: 'T6', description: 'LOL', goalId: 5, status: 'Completed' })
    ])
  })
  .then(() => {
    return Promise.all(completedGoals.map(_goal => Goal.createGoalTasksFromObj(_goal)))
  })
}
