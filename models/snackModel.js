const mongoose  = require("mongoose");

const snackSchema=mongoose.Schema({
    name: {type:String , required:true},
    prices:[],
    quantity:[],
    category: {type:String , required:true},
    image: {type:String , required:true},
    description: {type:String , required:true}
},{
    timetamps:true,
})
const snackModel = mongoose.model('snacks',snackSchema)

module.exports=snackModel;