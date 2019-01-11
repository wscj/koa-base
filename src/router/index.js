const CONTROLLER = require('../controller')
const Router = require('koa-router')
const router = new Router()

router.get('/', CONTROLLER.index.getIndex)
router.post('/user/login', CONTROLLER.user.login)

module.exports = router
