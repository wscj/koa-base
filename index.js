const path = require('path')
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
app.use(bodyParser()) // 在路由之前
const cors = require('koa2-cors')
app.use(require('koa-static')(path.join(__dirname, 'static'), {}))

// 跨域授权
app.use(cors({
  origin: function (ctx) {
    // 如果不是允许的域名，返回false
    return ctx.request.req.headers.origin
  },
  maxAge: 3600,
  credentials: true,
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Keep-Alive', 'User-Agent', 'Content-Type', 'Authorization']
}))

const router = require('./router')
app.use(router.routes()).use(router.allowedMethods())

app.listen(4500)
console.log('listening on 4500 port')
