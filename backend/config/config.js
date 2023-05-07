const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();


const connectDB = ()=>{
    try{
        const url = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/pizzastore"
        const conn = mongoose.connect(url,{
            useUnifiedTopology:true,
            useNewUrlParser: true,
        })
        console.log("database connected successfully")
    }
catch (error) {
    console.log(`error: ${error.message}`);
}
}

module.exports=connectDB;


