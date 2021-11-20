const { database } = require('./../config/system')
const { connect } = require('mongoose')

const connectDB = () => {
    connect(database.url).then(() => {
        console.log(`Database connection successful`)
    }).catch(err => console.error(`Unable to connect: ${err}`))
}

module.exports = connectDB