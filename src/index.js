
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express()

// const url = 'mongodb+srv://esteban:123calculadora@cluster0-ovnju.mongodb.net/test?retryWrites=true&w=majority';

// mongoose.connect(url, { useNewUrlParser: true }, function (error) {
//   console.log(error)
// });

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send("<h1>Test server</h1>")
})

app.post('/login', (req, res) => {
  const myUser = {
    email: 'federico@gmail.com',
    password: '123123'
  }
  if (req.body.email !== myUser.email) {
    return res.status(400).send({
      error: true,
      message: "Email is not registered"
    })
  }
  if (req.body.password !== myUser.password) {
    return res.status(400).send({
      error: true,
      message: "Password is not correct"
    })
  }
  return res.status(200).send({
    success: true,
    message: 'User logged successfully',
    user: myUser,
  })
})

app.listen(4000, () => {
  console.log('Servidor corriendo en puerto 4000')
})