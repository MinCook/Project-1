const mongoose = require("mongoose");
const forgotPassSchema = new mongoose.Schema({
        email:String,
        otp:String,
        expireAt:{
         type: Date,
         expires: 60,
} 
});
const ForgotPass = mongoose.model("ForgotPass", forgotPassSchema,"forgotPass")
module.exports = ForgotPass;