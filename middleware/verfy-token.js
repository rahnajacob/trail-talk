const jwt = require('jsonwebtoken')

function verifyToken(req, res, next){
    try {

    } catch (error) {
        res.status(401).json({ error: 'Invalid authorization token.' })
    }
}

module.exports = verifyToken