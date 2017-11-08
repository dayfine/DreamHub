const conn = require('./conn');
const Users = require('./Users');

//Associations

const sync = ()=> conn.sync();

const seed = ()=> {
  return conn.sync({ force: true })
    .then(()=> {
      Users.create({ name: 'John' })
    })
}

module.exports = {
  sync,
  seed,
  models: {
    Users
  }
}