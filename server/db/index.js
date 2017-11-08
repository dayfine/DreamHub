const conn = require('./conn')
const Users = require('./Users')

const sync = () => conn.sync({ force: true })
const seed = () => {
  Users.create({ name: 'John' })
}

module.exports = {
  sync,
  seed,
  models: { Users }
}
