const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    singer:{
        // type:mongoose.Schema.Types.ObjectId,
        type:String,
        required:true,
        ref:'Singer'
    },
    language:{
        type:String,
        required:true
    }
})



module.exports = mongoose.model('Song', songSchema)
