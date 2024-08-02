//imports
const dotenv = require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
//local imports
const usersRouter = require('./controllers/users.js')
const profileRouter = require('./controllers/profiles.js')
const postsRouter = require('./controllers/posts.js')

//db connection
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

//middleware
app.use(cors());
app.use(express.json())

//routes
app.use('', usersRouter)
app.use('',profileRouter)
app.use('',postsRouter)

//listening port
app.listen(3000, () => {
    console.log('The express app is ready!');
})