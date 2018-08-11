const express = require('express')
const auth = require('../../config/auth')

module.exports = function (server) {
  const botController = require('../bot/bot.controller')

  const protectedRoutes = express.Router()
  const openRoutes = express.Router()

  // protectedRoutes.use(auth);

  server.use('/bot', openRoutes)
  openRoutes.get('/', botController.teste)
  openRoutes.put('/', botController.monitoramento)
}
