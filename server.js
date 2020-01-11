const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
require('dotenv').config()


const DB_URL = process.env.MONGO_URL

// Iniciando app
const app = express();
app.use(express.json())
app.use(cors())

//Iniciando DataBase
mongoose.connect(
  `mongodb://${DB_URL}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

requireDir('./src/models');



// Rotas
app.use('/api', require('./src/routes'))


var PORT = process.env.PORT || 3001

app.listen(PORT);

