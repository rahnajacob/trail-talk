const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/users.js')

//const SALT_LENGTH = 12

//tested working on postman
router.post('/sign-up', async (req, res) => {
    try {
        const usernameTaken = await User.findOne({username : req.body.username})
        if (usernameTaken){
            return res.status(400).json({error: 'Username already taken'})
        }
        req.body.hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        const user = await User.create(req.body)
        const token = jwt.sign({username: user.username, _id: user._id}, process.env.JWT_SECRET)
        console.log(token)
        res.status(201).json({ user, token })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

//tested working on postman
router.post('/sign-in', async (req, res) =>{
    try {
        const user = await User.findOne({ username: req.body.username})
        if (user && bcrypt.compareSync(req.body.password, user.hashedPassword)){
            const token = jwt.sign({username: user.username, _id: user._id}, process.env.JWT_SECRET)
            res.status(200).json({ token })
        }else{
            return res.status(401).json({error: 'Invalid Username or Password'})
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

module.exports = router;