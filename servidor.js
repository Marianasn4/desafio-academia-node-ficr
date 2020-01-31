const express = require('express')
const app = express()
const port = 3000;
const path = require('path')
 

app.get('/', function(req, res) {
  res.render('index.ejs', {
   title: 'CV Mariana Silva do Nascimento',
   version: "0.0.0"
})
 
app.listen(3000)