const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send(`<h1>this is a to do list</h1>`)
})

app.listen(port, () => {
  console.log(`express is running on http://localhost:${port}`)
})
