const static = require('koa-static')
const path = require('path')

console.log(666, __dirname, path.join(__dirname, '../../..', 'static'))

module.exports = (app) => {
  return static(path.join(__dirname, '../../..', 'static'), {})
}
