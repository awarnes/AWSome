const newrelic = require('newrelic')
const express = require('express')
const fetch = require('node-fetch')
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { title: 'Didgeri-Downunder', message: 'Welcome!'})
})

app.get('/store', (req, res) => {
  const items = [{name: 'biggeridoo', price: 99.99}, {name: 'medium', price: 49.99}, {name: 'smalleridoo', price: 12.99}]
  res.render('store', {items})
})

app.get('/ceo', (req, res) => {
  fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(json => {
      res.render('people', {person: json.results[0]})      
    })
})

app.listen(3000, () => console.log('Server running on port 3000'))

