const path = require('path')

module.exports = {
  pages: {
    admin: {
      entry: 'src/apps/admin/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'App 2 prod'
    }
  },
  publicPath: '/admin'
}