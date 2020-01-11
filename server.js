const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
require('dotenv').config()



// Iniciando app
const app = express();
app.use(express.json())
app.use(cors())

//Iniciando DataBase
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
  });

requireDir('./src/models');



// Rotas
app.use('/', require('./src/routes'))


var PORT = process.env.PORT || 3001

app.listen(PORT);

