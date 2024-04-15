const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {
  const products = await Product.find({
    deleted: "false",
  }).limit(4);
  res.render("client/pages/home.pug", {
    product: products,
  });
};
