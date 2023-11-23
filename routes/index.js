const express = require('express')
const router = express.Router()

const Singer = require('../models/singer')
const Song = require('../models/song')


router.get('/', async (req,res) =>{
    try {
        const songs = await Song.find({playlist:true}).sort({singer:1})
        res.render('playlist', {
            songs: songs,
        })
    } catch {

    }
})


module.exports = router