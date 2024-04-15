const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
        title:String,
        price:Number,
        images:Array,
        position:Number,
        category:Object,
        status:String,
        description:String,
        stock: Number,
        deleted: {
                type: Boolean,
                default:false,
        },
});
const Product = mongoose.model("Product", productSchema,"listProducts")
module.exports = Product;