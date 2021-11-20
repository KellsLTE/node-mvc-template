require('dotenv').config()

const system = {
    database: {
        url: process.env.DATABASE_URL,
        port: process.env.PORT
    },
    environment: process.env.APP_ENV,
    host: process.env.APP_URL
}

module.exports = system