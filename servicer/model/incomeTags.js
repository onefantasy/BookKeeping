// 收入表签
const sequelize = require('../sequelize')
const Sequelize = require('sequelize')

const incomeTags = sequelize.define('incomeTags', {
  // 唯一id，用账号 + 时间戳
  tid: {
  	type: Sequelize.STRING,
  	allowNull: false,
  	primaryKey: true
  },
  // 标签内容
  content: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  // 所有者
  owner: {
  	type: Sequelize.STRING,
  	allowNull: false
  }
}, { freezeTableName: true })

module.exports = incomeTags