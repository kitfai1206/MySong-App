const express = require('express')
const router = express.Router()

const Singer = require('../models/singer')
const Song = require('../models/song')


//All Singer Route
router.get('/', async (req,res) =>{
    try{
        const singers = await Singer.find({}).sort({name:1})
        res.render('singers/index', {
            singers : singers,
        })
    } catch  {
        res.redirect('/')
    }

}) 

//New Singer
router.get('/new', (req,res) =>{
    res.render('singers/new',{
        singer : new Singer()
    })
})

//Create new singer
router.post('/', async (req,res) =>{
    const singer = new Singer({
        name : req.body.name,
        gender: req.body.gender
    })
    try {
        const newSinger = await singer.save()
        res.redirect(`singers/${newSinger.id}`)
    } catch  {
        res.render('singers/new', {
            singer: singer,
            errMsg: 'Error in Creating new Singer'
        })
    }
})


//Get singer
router.get('/:id', async (req,res) => {
    try{
        const singer = await Singer.findById(req.params.id)
        res.render('singers/show', {
            singer : singer
        })
    } catch {
        res.redirect('/')
    }
})


//Edit singer
router.get('/:id/edit', async (req,res) =>{
    try{
        const singer = await Singer.findById(req.params.id)
        res.render('singers/edit', {
            singer : singer
        })
    } catch {
        res.redirect('/singers')
    }

})

router.put('/:id', async (req,res) => {
    let singer
    try{
        singer = await Singer.findById(req.params.id)
        singer.name = req.body.name
        singer.gender = req.body.gender
        await singer.save()
        res.redirect(`/singers/${singer.id}`)
    } catch {  
        if (singer == null) {
            res.redirect('/')
        } else {
            res.render('singers/edit', {
                singer : singer,
                errMsg: 'Error updating the singer'
            })
        }
    }
})

router.delete('/:id', async (req,res) =>{
    let singer
    let exists
    try {
        singer = await Singer.findById(req.params.id)
        exists = await Song.exists({singer: singer.name})
        if (exists) {
            console.log('This singer still have songs')
        } else {
            const response = await Singer.deleteOne({_id:req.params.id})
            console.log(response)
        }
        res.redirect('/singers')
    } catch (err){
        if (singer == null) {
            res.redirect('/')
        } else {
            console.log(err)
            res.redirect(`/singers/${singer.id}`)
        }

    }
})




module.exports = router