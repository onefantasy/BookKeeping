const Sequelize = require('sequelize')
const { sql } = require('config')

const sequelize = new Sequelize(sql.database, sql.user, sql.password, {
  host: sql.host,
  dialect: sql.dialect,
  operatorsAliases: sql.operatorsAliases,
  pool: sql.pool
})
sequelize
  .authenticate()
  .then(() => {
    console.log('MYSQL 连接成功......');
  })
  .catch(err => {
    console.error('链接失败:', err);
  })
  // 根据模型自动创建表
sequelize.sync({ alter: true })

module.exports = sequelize
