const router = require('koa-router')()

// 数据库操作
const incomeTags = require('../model/incomeTags')
const Op = require('sequelize').Op

router.prefix('/incomeTags')

// 添加标签
router.post('/addTag', async (ctx, next) => {
	const params = ctx.request.body
	// 找寻是否存在该标签
	const tag = await incomeTags.findOne({
		where: {
			content: { [Op.eq]: `${params.content }` },
			owner: { [Op.eq]: `${params.owner}` }
		}
	})
	if (tag) {
		ctx.body = {
			code: 103,
			message: '该标签已经存在！'
		}
		return false
	}
	// 创建标签
	const incomeTag = await incomeTags.create(params)
	ctx.body = {
		code: incomeTag ? 200 : 500,
		message: `创建${ incomeTag ? '成功' : '失败' }！`
	}
})

module.exports = router