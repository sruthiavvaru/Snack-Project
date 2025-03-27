const express = require("express");
const router = express.Router();
const Snack = require('../models/snackModel');


router.get('/getAllSnacks',async(req,res)=>{

    try{
        const snacks = await Snack.find({})
        res.send(snacks)
    }
    catch(error){
        return res.status(400).json({message:error});
    }
});
module.exports = router;