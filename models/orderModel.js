const { type } = require("os")

const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name : {type:String , required:true},
    email : {type:String , required:true},
    userid : {type:String , required:true},
    orderItems : [],
    shippingAddress : {type:Object},
    orderAmount : {type:String , required:true},
    isDelivered : {type:Boolean , require , default:false},
    transactionId : {type:String , required:true},
    
},{
    timestamps : true
})
module.exports = mongoose.model('orders', orderSchema)