const router = require('koa-router')()

// 数据库操作
const records = require('../model/records')
const Op = require('sequelize').Op

router.prefix('/records')

// 保存记录
router.post('/save', async (ctx, next) => {
	const params = ctx.request.body
	if (!params.rid || !params.account) {
		ctx = {
			code: 103,
			message: '参数出错！'
		}
		return false
	}
	const record = await records.findOne({ where: { rid: params.rid } })
	let res = null
	if (record) {
		// rid 不用更新，更新信息中删除
		delete params.rid
		res = await record.update(params)
	} else {
		res = await records.create(params)
	}
	ctx.body = {
		code: res ? 200 : 500,
		message: `保存${ res ? '成功' : '失败' }！`
	}
})

// 获取记录
router.get('/getRecords', async(ctx, next) => {
	const params = ctx.query
})

module.exports = router