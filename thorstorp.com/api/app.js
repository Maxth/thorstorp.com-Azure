
const cors = require('cors')
const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
// middlewares
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// controllers
// app.use('/api/auth', require('./controllers/authController'))
app.use('/api/users', require('./controllers/usersController'))
app.use(
    '/api/docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );

module.exports = app