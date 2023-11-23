const mongoose = require('mongoose')
const Song = require('./song')


const singerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        require:true
    }
})




module.exports = mongoose.model('Singer', singerSchema)