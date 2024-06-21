const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const {dbConnect} = require('./config/database')
require('dotenv').config()

app.use(express.json());
app.use(cors()) 
app.set('view engine', 'ejs')
app.set('views',path.resolve('./views'))

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
  console.log(`App listening on ${PORT}`)
  dbConnect();
})

app.get('/',(req,res) => {
  return res.render('home')
})