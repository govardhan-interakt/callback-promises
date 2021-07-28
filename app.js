const express = require('express')
const mongoose = require('mongoose')
const bookroute = require('./routes/book')

const bodyParser = require('body-parser')
require('dotenv').config()
const connectDB = require('./config/db')
connectDB()

const app = express()
app.use(bodyParser.json())

app.use('/',bookroute)

const PORT = process.env.PORT




app.listen(PORT,()=>{
    console.log(`Listening: http://localhost:${PORT}`)
})