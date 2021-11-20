const { builtinModules } = require('module')

require('dotenv').config()

const providers = {
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    facebook: {

    },
    twitter: {

    }
}

module.exports = providers