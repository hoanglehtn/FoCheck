const express = require('express')
const LoginController = require("../controller/LoginController")
const LoginRoute = express.Router()

LoginRoute.route("/auth")
    .all(LoginController.handleAuthorization)

module.exports = LoginRoute