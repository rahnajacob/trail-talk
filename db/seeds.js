//imports
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

//import user models
const User = require('../models/users.js')
const Post = require('../models/posts.js')

//data
const userData = require('./data/userData.js')
const postData = require('./data/postData.js')

const seedDatabase = async () => {
    try {
        //connect to database
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected to database');

        //remove data from database
        const deletedUsers = await User.deleteMany()
        console.log(`deleted ${deletedUsers.deletedCount} users`)
        const deletedPosts = await Post.deleteMany()
        console.log(`deleted ${deletedPosts.deletedCount} posts`)
        
        //create new users in DB
        const users = await User.create(userData)
        const postsWithAuthors = postData.map(post => {
            return { ...post, author: users[Math.floor(Math.random() * users.length)]._id }
        })
        const posts = await Post.create(postsWithAuthors)
        
        //close connection
        await mongoose.connection.close()
    } catch (error) {
      console.log(error)  
    }
}

seedDatabase()