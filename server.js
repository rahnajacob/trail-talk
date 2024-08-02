//imports
const dotenv = require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
//local imports


//db connection
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

//middleware
app.use(cors());
app.use(express.json())

//routes

//listening port
app.listen(3000, () => {
    console.log('The express app is ready!');
})