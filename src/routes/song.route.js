const controller = require("../controllers/song.controller")
const express = require('express')

const router = express.Router()

router.get('/', controller.getAll)
router.post('/', controller.create)
router.get('/:name', controller.getKey)

module.exports = router