module.exports = {
  async login (ctx, next) {
    console.log(ctx.request.body)
    ctx.response.body = {
      token: 'xxxxx'
    }
  }
}
