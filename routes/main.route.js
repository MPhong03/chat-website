const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Server is running!')
})

router.get('/helloworld', (req, res) => {
    res.send('Hello, World!')
})

module.exports = router;