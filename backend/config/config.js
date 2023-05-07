const mongoose = require('mongoose')
const pizzaModel = require('../models/pizzaModel');
const pizzaData = require("../data/pizzaData.js");
const dotenv = require("dotenv");
dotenv.config();


const connectDB = async ()=>{
    try{
        const url = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/pizzastore"
        const conn = await mongoose.connect(url,{
            useUnifiedTopology:true,
            useNewUrlParser: true,
        })
        console.log("database connected successfully")
    }
catch (error) {
    console.log(`error: ${error.message}`);
}

const refreshAll = async () => {
    await pizzaModel.deleteMany({});
    await pizzaModel.insertMany(pizzaData);
    await mongoose.disconnect();
}
refreshAll();
}
module.exports=connectDB;


