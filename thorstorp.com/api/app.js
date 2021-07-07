const cors = require('cors')
const express = require('express')
const app = express()

// middlewares
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// controllers
// app.use('/api/auth', require('./controllers/authController'))
app.use('/api/users', require('./controllers/usersController'))


module.exports = app