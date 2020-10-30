const router = require('koa-router')()

// 数据库操作
const incomeTags = require('../model/incomeTags')
const payTags = require('../model/payTags')
const Op = require('sequelize').Op

router.prefix('/tags')

// 添加标签
router.post('/addTag', async (ctx, next) => {
	const params = ctx.request.body
	const data = {
		tid: params.tid,
		content: params.content,
		owner: params.owner
	}
	// 为0是支出，为1是收入
	const tags = +params.type ? incomeTags : payTags
	// 找寻是否存在该标签
	const record = await tags.findOne({
		where: {
			content: { [Op.eq]: `${data.content }` },
			owner: { [Op.eq]: `${data.owner}` }
		}
	})
	if (record) {
		ctx.body = {
			code: 103,
			message: '该标签已经存在！'
		}
		return false
	}
	// 创建标签
	const tag = await tags.create(data)
	ctx.body = {
		code: tag ? 200 : 500,
		message: `创建${ tag ? '成功' : '失败' }！`
	}
})

// 获取标签
router.get('/getTags', async (ctx, next) => {
	const params = ctx.query
	if (!params.owner) {
		ctx.body = {
			code: 300,
			message: '参数错误！'
		}
		return false
	}
	let pTags = null
	let iTags = null
	// 为0 或 3查询支出标签
	if ([0, 3].indexOf(+params.type) !== -1) {
		pTags = await payTags.findAll({
			where: { owner: { [Op.eq]: `${params.owner}` } }
		})
	}
	// 为1 或 3查询收入标签
	if ([1, 3].indexOf(+params.type) !== -1) {
		iTags = await incomeTags.findAll({
			where: { owner: { [Op.eq]: `${params.owner}` } }
		})
	}
	const status = !!pTags || !!iTags
	// 返回值
	ctx.body = {
		payTags: pTags,
		incomeTags: iTags,
		code: status ? 200 : 500,
		message: status ? '查询成功！' : '查询失败！'
	}
})

// 删除标签
router.get('/delTag', async (ctx, next) => {
	const params = ctx.query
	// 为0是支出，为1是收入
	const tags = +params.type ? incomeTags : payTags
	const res = await tags.destroy({
		where: { tid: params.tid }
	})
	// 返回体
	ctx.body = {
		code: res ? 200 : 500,
		message: `删除${ res ? '成功' : '失败' }！`
	}
})

module.exports = router