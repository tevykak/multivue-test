const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'src/apps/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'App 1 prod'
    }
  },
  publicPath: '/'
}