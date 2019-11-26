const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'src/apps/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
    admin: {
      entry: 'src/apps/admin/main.js',
      template: 'public/admin.html',
      filename: 'admin.html',
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