const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'src/apps/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'App 1'
    },
    admin: {
      entry: 'src/apps/admin/main.js',
      template: 'public/index.html',
      filename: 'admin.html',
      title: 'App 2'
    }
  },

  devServer: {
    port: 8080,
    historyApiFallback: {
      rewrites: [
        { from: /^\/admin\/?.*/, to: path.posix.join('/', 'admin.html') },
        { from: /./, to: path.posix.join('/', 'index.html') }
      ]
    }
  }
}