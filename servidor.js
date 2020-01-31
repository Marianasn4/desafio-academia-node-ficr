const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('CV Mariana Silva do Nascimento')
})
 
app.listen(3000)