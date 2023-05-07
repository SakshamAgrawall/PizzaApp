const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("./config/config");


//config dotenv
dotenv.config()

//database
connectDB()

const app = express();


//middlewares
app.use(express.json());

//route
app.get('/',(req,res)=>{
    res.send("<h1>hello</h1>");
})

const Port = process.env.PORT || 4000
app.listen(Port, ()=>{
    console.log(`server in live on port: ${Port}`);
})