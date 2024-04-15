const Cart = require("../../models/cart.model");
module.exports.cartId = async (req, res, next) => {
  if (!req.cookies.cartID) {
    const cart = new Cart();
    await cart.save();
    res.cookie("cartID", cart.id, {
      expires: new Date(Date.now() + 3600 * 1000 * 24 * 365 * 10),
    });
  } 

  else {
    const cart = await Cart.findOne({
      _id: req.cookies.cartID,
    });
    if (cart.products.length > 0) {
      const total = cart.products.reduce((sum, item) => sum + item.quantity, 0);
      total >0 ? res.locals.miniCart = total : ""

    }
  }

  next();
};
