const express = require('express');
const app = express();
const cors = require('cors');
const {dbConnect} = require('./config/database')
require('dotenv').config()

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
  console.log(`App listening on ${PORT}`)
  dbConnect();
})

