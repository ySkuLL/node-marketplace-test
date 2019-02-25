const express = require('express')

const routes = express.Router()

// const authMiddleware = require('./app/middlewares/auth')
// const UserController = require('./app/controllers/UserController')
// const SessionController = require('./app/controllers/SessionController')

const controllers = require('./app/controllers')

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

module.exports = routes
