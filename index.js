const newrelic = require('newrelic')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hey!')
})

app.get('/long', (req, res) => {
  const len = 10000000
  Array(len).fill('').forEach(() => {
    let x = Math.random()
  })
  res.send('This took too long!')
})

app.get('/break', (req, res) => {
  const len = 100000000
  Array(len).fill().forEach(() => {
    let x = Math.random()
  })
  res.send('This didn\'t work!')
})

app.listen(3000, () => console.log('Server running on port 3000'))

