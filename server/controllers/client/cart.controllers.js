const Cart = require("../../models/cart.model");
const Product = require("../../models/product.model");

module.exports.cart = async (req, res) => {
  const cartID = req.cookies.cartID;
  const cart = await Cart.findOne({ _id: cartID });
  if (cart) {
    for (const item of cart.products) {
      const productID = item.product_id;
      const productInfo = await Product.findOne({ _id: productID });
      item.productInfo = productInfo;
    }
  }

  res.render("client/pages/cart.pug", {
    Cart: cart,
  });
};

module.exports.cartDelete = async (req, res) => {
  const id = req.params.id;
  const cartID = req.cookies.cartID;
  await Cart.updateOne(
    { _id: cartID },
    { $pull: { products: { product_id: id } } }
  );
  res.redirect("back");
};
module.exports.cartOrder = async (req, res) => {
  res.send("OK");
};

module.exports.cartAdd = async (req, res) => {
  const cartID = req.cookies.cartID;
  const productID = req.params.id;
  const quantity = parseInt(req.body.quantity) || 1;
  const cart = await Cart.findOne({
    _id: cartID,
  });

  const existProductCart = cart.products.find(
    (item) => item.product_id === productID
  );
  if (existProductCart) {
    const newQuantity = quantity + existProductCart.quantity;
    await Cart.updateOne(
      {
        _id: cartID,
        "products.product_id": productID,
      },
      {
        "products.$.quantity": newQuantity,
      }
    );
  } else {
    const objectCart = {
      product_id: productID,
      quantity: quantity,
    };
    await Cart.updateOne(
      {
        _id: cartID,
      },
      {
        $push: { products: objectCart },
      }
    );
  }

  res.redirect("back");
};
