const router = require('koa-router')()

//引入bcryptjs 对密码进行加密解密
const bcrypt = require('bcryptjs');

// 数据库操作
const users = require('../model/users')
const Op = require('sequelize').Op

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

// 注册
router.post('/register', async (ctx, next) => {
	const params = ctx.request.body
  // 加密用的盐
  const slat = bcrypt.genSaltSync(10)
  // 插入数据库时，对密码进行加密
  params.password = bcrypt.hashSync(params.password, slat)
  try {
    const user = await users.create(params)
    ctx.body = {
      code: user ? 200 : 104,
      data: user,
      message: user ? '创建成功！' : '创建失败！'
    }
  } catch(err) {
    console.log('错误：', err)
    if (err.errors && err.errors[0].type === 'unique violation') {
      ctx.body = {
        code: 103,
        message: '该账号已经存在！'
      }
      return false
    }
    ctx.body = {
      code: 104,
      message: '出错了！'
    }
  }
})

// 登录
router.post('/login', async (ctx, next) => {
	const params = ctx.request.body
  const data = await users.findOne({
    where: {
      account: {
        [Op.eq]: `${params.account}`
      }
    }
  })
  if (!data) {
    ctx.body = {
      code: 404,
      message: '账号不存在！'
    }
  } else if (!bcrypt.compareSync(params.password, data.password)) {
    // 对密码进行校验，如果不对，则返回下面语句
    ctx.body = {
      code: 103,
      message: '密码错误！'
    }
  } else {
    // 对密码进行校验，如果密码正确，则返回下面语句
    await data.update({ latestTime: Date.now(), origin: ctx.header.origin })
    ctx.body = {
      code: 200,
      message: '登录成功！',
    }
  }
})

module.exports = router
