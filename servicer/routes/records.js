const router = require('koa-router')()

// 数据库操作
const records = require('../model/records')
const Op = require('sequelize').Op

router.prefix('/records')

// 获取收入与支出总数
async function getCount(account, flow) {
	const where = {
		account,
		flow
	}
	const res = await records.findAll({ where })
	let sum = res.reduce((pre, current) => {
		return +pre + +current.money
	}, 0)
	return sum || 0
}

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
router.get('/getRecords', async (ctx, next) => {
	const params = ctx.query
	if (!params.account) {
		ctx.body = {
			code: 103,
			message: '参数出错！'
		}
		return false
	}
	let payRecords = null
	let incomeRecords = null
	const payCount = await getCount(params.account, '支出')
	const incomeCount = await getCount(params.account, '收入')
	// 合并参数
	const data = {
		where: { account: params.account },
    	order: [
    	  ['createdAt', 'DESC']
    	]
	}
	params.limit && (data.limit = +params.limit)
	// 获取支出记录
	if ([0, 3].indexOf(+params.type) !== -1) {
		data.where.flow = '支出'
		payRecords = await records.findAll(data)
	}
	// 获取收入记录
	if ([1, 3].indexOf(+params.type) !== -1) {
		data.where.flow = '收入'
		incomeRecords = await records.findAll(data)
	}
	// 查询结果
	const res = !!payRecords || !!incomeRecords
	ctx.body = {
		code: res ? 200 : 500,
		message: `记录查询${ res ? '成功' : '失败' }！`,
		payRecords,
		incomeRecords,
		payCount,
		incomeCount
	}
})

module.exports = router