// 收入表签
const sequelize = require('../sequelize')
const Sequelize = require('sequelize')

const records = sequelize.define('records', {
	// 记录唯一id
	rid: {
		type: Sequelize.STRING,
		allowNull: false,
		primaryKey: true
	},
	account: {
		type: Sequelize.STRING,
		allowNull: false
	},
	money: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	flow: {
		type: Sequelize.STRING,
		allowNull: false
	},
	date: {
		type: Sequelize.STRING,
		allowNull: false
	},
	time: {
		type: Sequelize.STRING,
		allowNull: false
	},
	tags: {
		type: Sequelize.STRING,
		allowNull: false
	},
	info: {
		type: Sequelize.STRING,
		allowNull: false
	}
}, { freezeTableName: true })

module.exports = records