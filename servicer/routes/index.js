const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.redirect('/h5')
  // await ctx.render('index', {
  //   title: '你好，世界！!!!!'
  // })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
