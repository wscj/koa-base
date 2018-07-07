const path = require('path')
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
app.use(bodyParser()) // 在路由之前
const router = require('./router')
app.use(require('koa-static')(path.join(__dirname, 'static'), {}))

app.use(router.routes()).use(router.allowedMethods())

app.listen(3500)
console.log('listening on 3500 port')
