const express = require('express')

const router = express.Router()

const a = 100

router.get('/', (req,res) =>{
    res.render('index')
})


module.exports = router