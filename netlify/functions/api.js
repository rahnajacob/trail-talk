//imports
const dotenv = require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan');


const app = express()
//local imports
const usersRouter = require('../../controllers/users.js')
const profileRouter = require('../../controllers/profiles.js')
const postsRouter = require('../../controllers/posts.js')

//db connection
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

//middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'));


//routes
app.use('/users', usersRouter) //auth
app.use('/profile',profileRouter) //jwt token
app.use('/posts',postsRouter) //all others

//listening port
module.exports.handler = serverless(app)