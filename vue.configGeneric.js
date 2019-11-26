const path = require('path')

module.exports = {
  pages: {
    admin: {
      entry: 'src/apps/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'App 1 prod'
    }
  },
  publicPath: '/'
}