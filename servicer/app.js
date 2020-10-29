const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
// 用户接收上传的图片和文件
const koaBody = require('koa-body')
const logger = require('koa-logger')
const path = require('path')

const index = require('./routes/index')
const users = require('./routes/users')
const tags = require('./routes/tags')

// 跨域
const cors = require('koa2-cors')

// 决解跨域以及options请求
app.use(
  cors({
    origin: function(ctx) { //设置允许来自指定域名请求
      if (ctx.url === '/test') {
        return '*' // 允许来自所有域名请求
      }
      return ctx.header.origin // 允许所有域名进行请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept','x-token'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization','token'] //设置获取其他自定义字段
  })
)

// error handler
onerror(app)

// middlewares
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// koa-body 配置
app.use(koaBody({
  multipart: true,
  formidable: {
    // 设置上传的文件的大小限制
    maxFileSize: 1024 * 1024 * 5,    
    // 设置文件的默认保存目录，不设置则保存在系统的临时目录下
    uploadDir: path.resolve(__dirname,'./public/images/headIcon')
  }
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(tags.routes(), tags.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
