module.exports = (User, Goal, Task, Category) => {
  let users
  // let goals, tasks
  return Promise.all([
    User.create({ name: 'Anthony', password: 'anthony' }),
    User.create({ name: 'Burcu', password: 'burcu' }),
    User.create({ name: 'Di', password: 'di' }),
    User.create({ name: 'Jerry', password: 'jerry' }),
    User.create({ name: 'test', email: 'test@test.test', password: 'test' }),
    User.create({ name: 'nofriend', password: 'nofriend' })
  ])
  .then(_users => {
    users = _users
    return Promise.all([
      users[0].addFriends(users[2], users[3]),
      users[1].addFriends(users[2]),
      users[4].addFriends(users[0], users[1], users[2], users[3])
    ])
  })
  .then(() => {
    return Promise.all([
      Goal.create({ title: 'Travel', description: 'Want to go to somewhere', userId: 1 }),
      Goal.create({ title: 'Travel', description: 'Want to go to Burundi', userId: 2 }),
      Goal.create({ title: 'Learn Spanish', description: 'Be conversant', userId: 3 }),
      Goal.create({ title: 'Own a house', description: 'American Dream', userId: 4 }),
      Goal.create({ title: 'Testie', description: 'American Drum', userId: 5 }),
      Goal.create({ title: 'Tastie', description: 'American Drim', userId: 5 })
    ])
  })
  .then(_goals => {
    return Promise.all([
      Task.create({ title: 'T1', description: 'Want to go to Burundi', goalId: 1 }),
      Task.create({ title: 'T2', description: 'Want to go to Burundi', goalId: 2 }),
      Task.create({ title: 'T3', description: 'Want to go to Burundi', goalId: 3 }),
      Task.create({ title: 'T4', description: 'Want to go to Burundi', goalId: 4 }),
      Task.create({ title: 'T5', description: 'Want to go to Burundi', goalId: 5 }),
      Task.create({ title: 'T6', description: 'Want to go to Burundi', goalId: 6 })
    ])
  })
}
