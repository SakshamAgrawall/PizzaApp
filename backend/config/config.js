const mongoose = require('mongoose');

const connectDB = () => {
    try {
        const url = 'mongodb+srv://saksham:7023797883@cluster0.2vpy7pt.mongodb.net/pizzastore'
        const conn = mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("database connected successfully")
    }
    catch (error) {
        console.log(`error: ${error.message}`);
    }
}

module.exports = connectDB;


