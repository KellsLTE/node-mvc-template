const app = require('./bootstrap/app')
const { database } = require('./config/system')
const connectDB = require('./database/connection')


// initiate database connection
//connectDB()

const port = database.port || 5000

//start server
app.listen(port, () => console.log(`Server is running on port ${port}`))