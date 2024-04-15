const mongoose = require("mongoose");
const roleSchema = new mongoose.Schema({
        title:String,
        description:String,
        permissions:{
            type:Array,
            default:[],
        },
        deleted: {
                type: Boolean,
                default:false,
        },
});
const Roles = mongoose.model("Roles", roleSchema,"Roles")
module.exports = Roles;