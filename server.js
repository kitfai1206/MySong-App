if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

//method
app.use(methodOverride('_method'))

//views
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout',  'layouts/layout')

//layout
app.use(expressLayouts)

//body-parser
app.use(bodyParser.urlencoded({limit:'20mb',extended:false}))

//routes
const indexRouter = require('./routes/index')
const singerRouter = require('./routes/singers')
const songRouter = require('./routes/songs')
app.use('/', indexRouter)
app.use('/singers', singerRouter)
app.use('/songs', songRouter)



// mongoose setup
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))
db.once('close', () => console.log('Database disconnected'))

app.listen(5000, () => {
    console.log('Server is on')
})