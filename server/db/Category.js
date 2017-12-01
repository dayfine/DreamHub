const conn = require('./conn')
const Sequelize = conn.Sequelize

const Category = conn.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    set (val) {
      this.setDataValue('name', `${val[0].toUpperCase()}${val.slice(1)}`)
    }
  },
  color: {
    type: Sequelize.STRING,
    defaultValue: '#ff8a80'
  }
})

module.exports = Category
