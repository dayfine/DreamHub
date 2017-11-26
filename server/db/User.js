const conn = require('./conn')
const Sequelize = conn.Sequelize
const bcrypt = require('bcrypt')
const Goal = require('./Goal')
const Task = require('./Task')

const User = conn.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      is: {
        args: /^\w+$/,
        msg: 'Username cannot contain special characters'
      },
      len: [4, 30]
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  googleId: {
    type: Sequelize.STRING
  },
  points: {
    type: Sequelize.INTEGER
  },
  lastCheckIn: {
    type: Sequelize.DATE
  }
})

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
      { model: User,
        as: 'friends',
        attributes: { exclude: ['password'] },
        include: [{ model: Goal }]
      }
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

module.exports = User
