const Cart = require("../../models/cart.model");
const Product = require("../../models/product.model");
const Order = require("../../models/order.model");
module.exports.order = async (req, res) => {
  const cartID = req.cookies.cartID;
  const cart = await Cart.findOne({ _id: cartID });

  for (const item of cart.products) {
    const productID = item.product_id;
    const productInfo = await Product.findOne({ _id: productID });
    item.productInfo = productInfo;
  }

  res.render("client/pages/order.pug", {
    Cart: cart,
  });
};

module.exports.orderPost = async (req, res) => {
  const cartID = req.cookies.cartID;
  const cart = await Cart.findOne({ _id: cartID });
  const products = [];
  for (const product of cart.products) {
    const objectProduct = {
      product_id: product.product_id,
      quantity: product.quantity,
    };
    const productInfo = await Product.findOne({ _id: product.product_id });
    objectProduct.price = productInfo.price;
    objectProduct.total = parseInt(productInfo.price * product.quantity);
    products.push(objectProduct);
  }
  const userInfo = [];
  const objectUserInfo = {
    fullName: req.body.fullName,
    phone: req.body.phone,
    address: req.body.address,
  };
  userInfo.push(objectUserInfo);
  const dataOrder = {
    cart_id: cartID,
    userInfo: userInfo,
    products: products,
  };
  await new Order(dataOrder).save();
  if (user) {
    res.redirect("user/products");
  } else {
    res.redirect("/products");
  }
};
