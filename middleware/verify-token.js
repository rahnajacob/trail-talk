const jwt = require('jsonwebtoken')
const User = require('../models/users.js')

async function verifyToken(req, res, next){
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decode._id)
        if (!user) throw new Error('User was not found!')
        req.user = user
        next()
    } catch (error) {
        res.status(401).json({ error: 'Invalid authorization token.' })
    }
}

module.exports = verifyToken