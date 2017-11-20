const conn = require('./conn');
const Sequelize = conn.Sequelize;
const bcrypt = require('bcrypt');
const Goal = require('./Goal');
const Task = require('./Task');

const User = conn.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  },
  points: {
    type: Sequelize.INTEGER
  }
});

const generateError = message => {
  const error = new Error(message)
  error.status = 401
  error.json = true
  return error
}

// Only fetch from server
User.getUserDataById = function (id) {
  return this.findById(id, {
      attributes: { exclude: ['password'] },
      include: [
        { model: Goal,
          include: [{ model: Task }]
         },
        { model: User, as: 'friend' }
       ]
    })
}

User.login = function (credentials) {
  if (!credentials.email || !credentials.password) {
    throw generateError('no credentials')
  }

  return this.findOne({ where: credentials, attributes: { exclude: ['password'] } })
    .then(user => {
      if (!user) throw generateError('bad credentials')
      return user
    })
}

User.signup = function (credentials) {
  if (!credentials.email || !credentials.password) {
    throw generateError('Missing info')
  }

  return this.create(credentials)
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        throw generateError('User already exists')
      }
    })
    .then(() => User.login(credentials))
    .catch(console.log)
}

module.exports = User;
