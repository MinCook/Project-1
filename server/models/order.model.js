const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
      {
        cart_id:String,
        userInfo:[
            {
                fullName:String,
                phone:String,
                address:String,
            }
        ],
        products:[
            {
                product_id:String,
                price:Number,
                total:Number,
                quantity:Number,
            }
        ],
      }
);
const Order = mongoose.model("Order", orderSchema , "order")
module.exports = Order;