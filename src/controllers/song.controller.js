const {sendData} = require("./middleware/messaging")
const service = require("../services/song.service")

module.exports = {
    getAll: (req, res) => {
        res.json(service.GetAll())
    },
    create: (req, res) => {
        res.json(service.Create(req.body))
    },
    getKey: (req, res) => {
        try {
            res.json(service.GetKey(req.params["name"]))
            const song = service.GetOne(req.params["name"])
            res.status(200)
            sendData({profileId: "user", songName: song.name})
        } catch (e) {
            console.log(e)
        }
    }
}