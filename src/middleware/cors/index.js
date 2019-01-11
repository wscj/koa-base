const cors = require('koa2-cors')

module.exports = (app) => {
  return cors({
    origin: function (ctx) {
      // 如果不是允许的域名，返回false
      return ctx.request.req.headers.origin
    },
    maxAge: 3600,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Keep-Alive', 'User-Agent', 'Content-Type', 'Authorization']
  })
}
