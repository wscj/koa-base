const user = require('./user')

const index = {
  getIndex (ctx, next) {
    ctx.response.body = 'Hello Koa'
  }
}

module.exports = {
  index,
  user
}
