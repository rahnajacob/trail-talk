const jwt = require('jsonwebtoken')

function verifyToken(req, res, next){
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode
        next()
    } catch (error) {
        res.status(401).json({ error: 'Invalid authorization token.' })
    }
}

module.exports = verifyToken