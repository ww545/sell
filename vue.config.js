const path = require('path')
const express = require('express')
const app = express()
var appData = require('./data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings
var apiRoutes = express.Router()
app.use('/api', apiRoutes)
module.exports = {
  devServer: {
    before(app) {
      app.get('/api/seller', (req, res) => {
        res.json({
          // 这里是你的json内容
          errno: 0,
          data: seller
        })
      }),
        app.get('/api/goods', (req, res) => {
          res.json({
            // 这里是你的json内容
            errno: 0,
            data: goods
          })
        }),
        app.get('/api/ratings', (req, res) => {
          res.json({
            // 这里是你的json内容
            errno: 0,
            data: ratings
          })
        })
    },
  },
  runtimeCompiler: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        'D:\\test2\\sell-master\\my-project\\src\\styles\\abstracts\\*.styl',
      ]
    }
  }
}

