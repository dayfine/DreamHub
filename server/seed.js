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
      Goal.create({ title: 'Travel', description: 'Want to go to somewhere', userId: 5 }),
      Goal.create({ title: 'Travel to Peru', description: 'See Amazon & Machu Picchu!', userId: 3 }),
      Goal.create({ title: 'Change TaskMapper Ln 46', description: 'For Screencast!', userId: 5 }),
      Goal.create({ title: 'Learn Spanish', description: 'Be conversant', userId: 5 }),
      Goal.create({ title: 'Own a house', description: 'American Dream', userId: 5 }),
      Goal.create({ title: 'Meditate', description: 'Visit every country in the world.', userId: 5 }),
      Goal.create({ title: 'Learn to cook', description: 'Stop spending money eating out!', userId: 5 }),
      Goal.create({ title: 'Learn Japanese', description: 'Get ready for job relocation in Osaka', userId: 5, categoryId: 2, progress: 'Accomplished' })
    ])
  })
  .then(() => {
    return Promise.all([
      Task.create({ title: 'Research attractions in Peru', description: 'Look for fun places to visit in Peru', goalId: 1, priorityValue: 25, priorityText: 'Low' }),
      Task.create({ title: 'Research Europe Destinations', description: 'Maybe London, maybe Paris, maybe Rome', goalId: 2, priorityValue: 25, priorityText: 'Low' }),
      Task.create({ title: 'Research Flight Prices', description: 'Find the cheapest flights', goalId: 2, priorityValue: 75, priorityText: 'High' }),
      Task.create({ title: 'Customize the code in TaskMapper', description: 'In line 46 edit the code in TaskMapper', goalId: 3 }),
      Task.create({ title: 'Enroll in Spanish Course', description: 'Find a good Spanish class', goalId: 4, status: 'Completed', priorityValue: 75, priorityText: 'High' }),
      Task.create({ title: 'Research location of houses', description: 'Where is a good place to own a house', goalId: 5 }),
      Task.create({ title: 'Enroll in Japanese Course', description: 'Find a good Japanese class', goalId: 8, status: 'Completed' }),
      Task.create({ title: 'Read How to cook Steak', description: 'Learn how to cook steak', goalId: 7, status: 'Completed' }),
      Task.create({ title: 'Buy Steak from market', description: 'Go to the market and buy steak', goalId: 7, priorityValue: 100, priorityText: 'Urgent' }),
      Task.create({ title: 'Prep the steak for cooking', description: 'Add seasoning to steak', goalId: 7, priorityValue: 75, priorityText: 'High' }),
      Task.create({ title: 'Cook steak', description: 'Put steak on grill and heat until temperature', goalId: 7, status: 'Completed', priorityValue: 75, priorityText: 'High' }),
      Task.create({ title: 'Eat steak', description: 'Enjoy the steak that you just cooked yourself', goalId: 7 }),
      Task.create({ title: 'Find flights', description: 'check Google Flights', status: 'In Progress', priority: 100, goalId: 1 }),
      Task.create({ title: 'Book plane ticket', status: 'Created', priority: 75, goalId: 1 }),
      Task.create({ title: 'Book stay', description: 'check airbnb & hotels', status: 'Created', priority: 75, goalId: 1 }),
      Task.create({ title: 'Take vacation time', description: 'Talk to boss', status: 'Later', priority: 75, goalId: 1 }),
      Task.create({ title: 'Pick 3 activities', status: 'Later', priority: 25, goalId: 1 }),
      Task.create({ title: 'Commit to this goal', status: 'In Progress', priority: 50, goalId: 1 }),
      Task.create({ title: 'Dream about it', status: 'In Progress', priority: 50, goalId: 1 }),
      Task.create({ title: 'Start planning', status: 'Completed', priority: 50, goalId: 1 })
    ])
  })
  .then(() => {
    return Promise.all(completedGoals.map(_goal => Goal.createGoalTasksFromObj(_goal)))
  })
}
