const Router = require('koa-router')
const router = new Router()

router.get('/test', async (ctx, next) => {
  ctx.response.body = 'test response'
})

module.exports = router
