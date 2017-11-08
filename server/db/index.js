const conn = require('./conn')

const sync = () => conn.sync({ force: true })

module.exports = {
  sync,
  models: { }
}
