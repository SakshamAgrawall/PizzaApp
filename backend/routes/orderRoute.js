const express = require("express");
const router = express.Router();
const Order = require('../models/orderModel');

router.post("/orderNow",async(req,res)=>{

    const {currentUser,cartItems,subTotal}=req.body;
    try {
        const newOrder = new Order ({
        name:currentUser.name,
        email:currentUser.email,
        userid:currentUser._id,
        orderItems: cartItems,
        orderAmount : subTotal
        })
        newOrder.save()
        res.send("order success")
    } catch (error) {
        res.status(400).json({
            message:"someting went wrong",
            error:error
        })
    }
})

module.exports = router;