const Sequelize = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize(process.env["DB_ENGINE"] + "://" + process.env["DB_USERNAME"] + ":" + process.env["DB_PASSWORD"] + "@" + process.env["DB_HOST"] + ":" + process.env["DB_PORT"] + "/" + process.env["DB_NAME"])

let Song = sequelize.define('song', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    key: {
        type: Sequelize.TEXT,
        allowNull: true
    },

})

Song.sync().then(() => {
    console.log('New table created')
}).finally(() => {})

module.exports = Song