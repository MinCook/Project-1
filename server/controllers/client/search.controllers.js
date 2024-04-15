const Product = require("../../models/product.model");
module.exports.search = async (req, res) => {
  const search = req.query.search;
  const keyword = new RegExp(search, "i");
  const orderBy = req.query.order_by;
  const product = await Product.find({
    title: keyword,
    deleted: false,
  }).sort({ price: orderBy });
  res.render("client/pages/search.pug", {
    Product: product,
    KeySearch: search,
    SortBy: orderBy,
  });
};
module.exports.searchDetail = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOne({ _id: id }, { deleted: false });
  res.render("client/pages/searchDetail.pug", {
    Product: product,
  });
};
