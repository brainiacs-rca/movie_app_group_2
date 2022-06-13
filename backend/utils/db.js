const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.DB_URL;
module.exports = () => {
    mongoose.connect(URL)
     .then(_ => console.log('Db connected ...'))
     .catch(error => console.error(error))
}