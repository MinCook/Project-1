const mongoose = require("mongoose");
const random =require("../public/js/randomString")
const accountSchema = new mongoose.Schema({
        fullName:String,
        phone:String,
        password:String,
        token:{
                type:String,
                default:random.randomString(20),
        },
        avatar:String,
        email:String,
        id_role:String,
         deleted: {
                 type: Boolean,
                default:false,
         },
});
const Account = mongoose.model("Account", accountSchema,"Account")
module.exports = Account;