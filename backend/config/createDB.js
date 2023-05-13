const mongoose = require('mongoose')
const pizzaModel = require('../models/pizzaModel')
const data = require('../data/pizzaData.js')
const dotenv=require("dotenv");

// configuration of env
dotenv.config();

// Connect to DATABASE
const DATABASE_URL = process.env.DATABASE_URI || "mongodb://127.0.0.1:27017/pizzastore";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await pizzaModel.deleteMany({});
    await pizzaModel.insertMany(data);
    await mongoose.disconnect();
}
refreshAll();