const express = require('express')
const mongoose = require('mongoose')
const Todo = require('./models/todo')
const methodOverride = require('method-override')
const routes = require('./routes')
const app = express()

require('dotenv').config()
// console.log(process.env)

const port = 3000

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', () => {
  console.log('mongoDB error')
})

db.once('open', () => {
  console.log('mongoDB connected')
})

const exphbs = require('express-handlebars')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(port, () => {
  console.log(`express is running on http://localhost:${port}`)
})
