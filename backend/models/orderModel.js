const mongoose = require("mongoose");

const orderSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"order name required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    userId:{
        type:String
    },
    orderItems:[],
    orderAmount:{
        type:String
    },
},{timesTamps:true});

module.exports = mongoose.model('orders',orderSchema)