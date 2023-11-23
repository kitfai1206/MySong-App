const express = require('express')
const router = express.Router()

const Singer = require('../models/singer')
const Song = require('../models/song')


//All Song Route
router.get('/', async (req,res) =>{
    try{
        const songs = await Song.find({}).sort({singer:1,title:1})
        res.render('songs/index', {
            songs : songs,
        })
    } catch  {
        res.redirect('/')
    }

}) 

//New Song
router.get('/new', async (req,res) =>{
    const singer = await Singer.find({}).sort({name:1})
    res.render('songs/new',{
        song : new Song(),
        singer: singer
    })
})

//Create new song
router.post('/', async (req,res) =>{
    const song = new Song({
        title : req.body.title,
        singer: req.body.singer,
        language: req.body.language
    })
    try {
        const newSong = await song.save()
        res.redirect(`songs/${newSong.id}`)
    } catch   {
        res.render('songs/new', {
            song: song,
            errMsg: 'Error in Creating new song'
        })
    }
})


//Get song
router.get('/:id', async (req,res) => {
    try{
        const song = await Song.findById(req.params.id)
        res.render('songs/show', {
            song : song
        })
    } catch {
        res.redirect('/')
    }
})


//Update Song
router.get('/:id/edit', async (req,res) =>{
    try{
        const song = await Song.findById(req.params.id)
        const singer = await Singer.find({})
        res.render('songs/edit', {
            song : song,
            singer : singer
        })
    } catch {
        res.redirect('/songs')
    }

})


router.put('/:id', async (req,res) => {
    let song
    try{
        song = await Song.findById(req.params.id)
        song.title = req.body.title
        song.singer = req.body.singer
        song.language = req.body.language
        await song.save()
        res.redirect(`/songs/${song.id}`)
    } catch {  
        if (song == null) {
            res.redirect('/')
        } else {
            res.render('songs/edit', {
                song : song,
                errMsg: 'Error updating the song'
            })
        }
    }
})

router.delete('/:id', async (req,res) =>{
    let song
    try {
        song = await Song.findById(req.params.id)
        const response = await Song.deleteOne({_id:req.params.id})
        console.log(response)
        res.redirect('/songs')
    } catch {
        if (song == null) {
            res.redirect('/')
        } else {
            res.redirect(`/songs/${song.id}`)
        }
    }
})


module.exports = router