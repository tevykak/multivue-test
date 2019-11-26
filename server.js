const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.get(/admin\/?.*/, function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/admin/index.html'))
})
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 5000

app.listen(port)
console.log('server started '+ port)