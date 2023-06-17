const express = require("express")
require("dotenv").config()
const {connectQueue} = require("./src/controllers/middleware/messaging")
const songRouter = require("./src/routes/song.route")
const {Sequelize} = require("sequelize")

const sequelize = new Sequelize(process.env["DB_ENGINE"] + "://" + process.env["DB_USERNAME"] + ":" + process.env["DB_PASSWORD"] + "@" + process.env["DB_HOST"] + ":" + process.env["DB_PORT"] + "/" + process.env["DB_NAME"])

const app = express()
app.use(express.json())
app.use('/songs', songRouter)

async function ConnectToDatabase() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

ConnectToDatabase()

connectQueue()

app.listen(process.env["PORT"], () => {
    console.log(`Songs microservice listening on port ${process.env["PORT"]}`)
})

exports.express = express;