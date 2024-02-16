const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.get('/', (req, res) => {
  res.send('BANK BANK BANK BANK BANK')
  //home screen for information on account/stocks
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/login', (req, res) => {
  res.send('Got to the login')
  //Needs to log the user in
  //Needs to check account credentials to deem if it's a yay or nay
})

app.get('/account', (req, res) => {
    res.send('Got to the account')
    //Needs to have account information
})

app.get('/stocks', (req, res) => {
    res.send('Stocks are here')
    //Show stocks that are available for users
})

app.get('/stocks/:id', (req, res) => {
    res.send('Stocks id')
    //Shows specific stock given by ID (may be related to stocks page that it is next to)
})

app.get('/pools', (req, res) => {
    res.send('Got to the pools')
    //Shows various pools available for managing staff (unless we're doing something else)
    //CLARIFICATION NEEDED
})

app.get('/trade', (req, res) => {
    res.send('Trade')
    //Stock trading stuffs will go here (need balance)
})

app.get('/pools/manage/:id', (req, res) => {
    res.send('Pools manager')
    //For person managing pools for their customers
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)