const path = require('path')
const Koa = require('koa')
const middleware = require('./middleware')
const app = new Koa()

middleware(app) 

const router = require('./router')
app.use(router.routes()).use(router.allowedMethods())

app.listen(4500)
console.log('listening on 4500 port')
