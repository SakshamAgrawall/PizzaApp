const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const app = express();


//config dotenv
dotenv.config()

//database
connectDB()
const Port = process.env.PORT || 4000



//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//route
app.use("/api/pizzas",require("./routes/pizzzaRoute"));
// app.get('/',(req,res)=>{
//     res.send("<h1>hello</h1>");
// })

app.listen(Port, ()=>{
    console.log(`server in live on port: ${Port}`);
})