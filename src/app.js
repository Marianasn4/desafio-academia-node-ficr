const express = require('express')
const router = require('express');
require('dotenv').config


const app = express()
const port = 3000;
app.use(router)
app.use(express.json()) 
app.listen(port)