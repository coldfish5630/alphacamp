const express = require('express')
const methodOverride = require('method-override')
const routes = require('./routes')
const app = express()

require('./config/mongoose')
// console.log(process.env)

const port = 3000

const exphbs = require('express-handlebars')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(port, () => {
  console.log(`express is running on http://localhost:${port}`)
})
