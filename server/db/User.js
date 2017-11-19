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
}, {
  hooks: {
    beforeCreate(user, options) {
      if(user){ //is this necessary?
        return bcrypt.genSalt(12)
          .then(salt => bcrypt.hash(user.password, salt))
          .then(hashedPW => user.password=hashedPW)
          .then(hashedPW => this.password=hashedPW)//is this necessary?
          .catch(err => console.log(`beforeCreate error message: ${err.message}`));
      }
    }
  }
});

User.isValidPassword = function(passwordEntered){
  return bcrypt.compare(passwordEntered, this.password)//will return true or false
  .then(isCorrectPW => {console.log('Is the password correct?', isCorrectPW); return isCorrectPW})
  .catch(err => console.log('VALIDATION ERROR', err.message))
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
