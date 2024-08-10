const express = require('express')
const app = express()
const port = 8080
const mainRoutes = require('./routes/main.route')

app.use('/', mainRoutes)

app.listen(port, () => {
    console.log('Server is running')
})