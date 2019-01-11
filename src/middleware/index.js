const fs = require('fs')
const path = require('path')
// const middlewarePath = path.join(__dirname, )
const dirList = fs.readdirSync(__dirname)

function useMiddleware (app) {
  dirList.forEach(dir => {
    if (dir !== 'index.js') {
      const mw = require(path.join(__dirname, dir, 'index.js'))
      app.use(mw())
    }
  })
}

module.exports = useMiddleware
