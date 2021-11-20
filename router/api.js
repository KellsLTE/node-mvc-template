//pull in dependencies
const express = require('express')
const router = express.Router()
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')


//pull in routes
router.use('/auth', authRoutes)
router.use('/user', userRoutes)


//export router
module.exports = router