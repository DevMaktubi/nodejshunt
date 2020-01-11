const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')


// Iniciando app
const app = express();
app.use(express.json())
app.use(cors())

//Iniciando DataBase
mongoose.connect(
  'mongodb://https://jshunt-apinode1.herokuapp.com:27017/',
  {
    useNewUrlParser: true,
  });

requireDir('./src/models');



// Rotas
app.use('/api', require('./src/routes'))


var PORT = process.env.PORT || 3001

app.listen(PORT);

