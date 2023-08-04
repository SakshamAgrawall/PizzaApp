const express = require('express');
const connectDB = require("./config/config");
const app = express();
const cors = express('cors')

connectDB()
const Port = 8000



//middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//route
app.use("/api/pizzas", require("./routes/pizzzaRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/orders", require("./routes/orderRoute"));

app.listen(Port, () => {
    console.log(`server in live on port: ${Port}`);
})