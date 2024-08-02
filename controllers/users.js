const express = require('express')
const router = express.Router()

const SALT_LENGTH = 12

router.post('/sign-up', async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.post('/sign-in', async (req, res) =>{
    try {
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

module.exports = router;