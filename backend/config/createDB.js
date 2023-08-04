const mongoose = require('mongoose')
const pizzaModel = require('../models/pizzaModel')
const data = require('../data/pizzaData.js')



// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://saksham:7023797883@cluster0.2vpy7pt.mongodb.net/pizzastore";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await pizzaModel.deleteMany({});
    await pizzaModel.insertMany(data);
    await mongoose.disconnect();
}
refreshAll();