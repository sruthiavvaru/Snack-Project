const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel'); 
const { register } = require('module');

router.post('/placeorder', async (req, res) => {
    const { token, totalAmount, currentUser, cartItems } = req.body;

    console.log('Request payload:', req.body);

    if (!token || !totalAmount || !currentUser || !cartItems) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const newOrder = new Order({
            name: currentUser.name,
            email: currentUser.email,
            userid: currentUser._id,
            orderItems: cartItems,
            orderAmount: totalAmount,
            transactionId: token.id, 
        });

        const savedOrder = await newOrder.save();

        console.log('Order saved successfully:', savedOrder);
        res.status(201).json({ message: 'Order placed successfully!', order: savedOrder });
    } catch (error) {
        console.error('Error processing order:', error);
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

router.post('/getuserorders',async (req,res)=>{
    const {userid} = req.body
    try{
        const orders = await Order.find({userid : userid})
        res.send(orders)
    } catch(error){
        return res.send(400).json({message : error});
    }
})

module.exports = router;