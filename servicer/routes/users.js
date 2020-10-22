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
router.post('/register', function (ctx, next) {
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
      message: user ? '创建成功' : '创建失败'
    }
  } catch(err) {
    console.log('错误：', err)
    if (err.errors && err.errors[0].type === 'unique violation') {
      ctx.body = {
        code: 103,
        message: '该账号已经存在'
      }
      return false
    }
    ctx.body = {
      code: 104,
      message: '出错了'
    }
  }
})

// 登录
router.post('/login', function (ctx, next) {
	ctx.body = '登录接口，开发中。。。'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
