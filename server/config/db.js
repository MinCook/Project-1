const mongoose = require('mongoose');
require("dotenv").config() 
module.exports.connect= async (req,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
    }
}