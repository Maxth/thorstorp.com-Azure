const route = require('express').Router()
const userService = require('../services/userService')
// const authService = require('../services/authService')

// unsecured routes
route.get('/', userService.get)


// secured routes
route.post('/', userService.create)

route.delete('/', userService.delete)
route.patch('/', userService.patch)
// route.delete('/:id', authService.requireAuth, userService.delete)

module.exports = route