//pull in dependencies
const express = require('express')
const routeNotFound = require('../app/Http/Exceptions/routeNotFound')
const errorsHandler = require('../app/Http/Exceptions/errorsHandler')
const app = express()
const router = require('./../router/api')
const { environment } = require('./../config/system')
const morgan = require('morgan')

//use morgan in development environment
if (environment == "development") {
    app.use(morgan('dev'))
}

//declare appwide middleware
app.use(express.json())

//handle routes
app.use('/api/v1', router)


//handle unmatched routes
app.all('*', routeNotFound)

//pull in error handler
app.use(errorsHandler)


//export app
module.exports = app