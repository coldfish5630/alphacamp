const Todo = require('../todo') // 載入 todo model
const db = require('../../config/mongoose')
require('dotenv').config()

db.once('open', () => {
  for (let i = 0; i < 10; i++) {
    Todo.create({ name: `name-${i}` })
  }
  console.log('done')
})
