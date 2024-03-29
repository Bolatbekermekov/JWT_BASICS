const express = require('express')
const { dashboard, login } = require('./tasks')
const router = express.Router()

const authenticationMiddleware = require("../middleware/auth")

router.route("/dashboard").get(authenticationMiddleware,dashboard)
router.route("/login").post(login)

module.exports = router