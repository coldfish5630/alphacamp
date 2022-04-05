const express = require('express')
const mongoose = require('mongoose')
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

app.get('/', (req, res) => {
  res.send(`<h1>this is a to do list</h1>`)
})

app.listen(port, () => {
  console.log(`express is running on http://localhost:${port}`)
})
