const mongoose = require('mongoose');
require('dotenv').config();

exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.dbUrl);
    console.log('DB Connection established');
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};
