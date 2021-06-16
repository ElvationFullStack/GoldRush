const express = require('express')
const path = require('path')
var app = express()
const port =3002
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(port, function() {
    console.log("Server up and running on port",port)
  })
  
  