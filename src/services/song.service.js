require('dotenv').config()
const Song = require("../entities/song")

module.exports = {
    GetAll: async function () {
        const songs = await Song.findAll({raw: true})
        let result = songs.map(song => song.name)
        return result
    },
    Create: async function (song) {
        return await Song.create({songName: song["songName"], key: song["key"]})
    },
    GetKey: async function (name) {
        const song = await Song.findOne({where: {name: name}})
        if (song == null) {
            console.log("Not found!")
        } else if (song.key == null) {
            console.log("Key is null!")
        } else {
            return song.key
        }
    },
    GetOne: async function (name) {
        const song = await Song.findOne({where: {name: name}})
        if (song == null) {
            console.log("Not found!")
        } else {
            return song
        }
    },
}
