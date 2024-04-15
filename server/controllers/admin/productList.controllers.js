const Product = require("../../models/product.model");

module.exports.productList = async (req, res) => {
  let totalPage = Math.ceil(
    (await Product.countDocuments({ deleted: false })) / 4
  );
  let skipProduct = 0;
  let currentPage = 1;
  req.query.page > 0
    ? (skipProduct = (parseInt(req.query.page) - 1) * 4)
    : (skipProduct = 0);
  req.query.page > 1
    ? (currentPage = parseInt(req.query.page))
    : (currentPage = 1);
  const products = await Product.find({ deleted: false })
    .limit(4)
    .skip(skipProduct);
  res.render("admin/pages/productList.pug", {
    productList: products,
    totalPage: totalPage,
    currentPage: currentPage,
  });
};

module.exports.changeStatus = async (req, res) => {
  const status = req.params.status;
  let changeStatus = status == "còn hàng" ? "hết hàng" : "còn hàng";
  const id = req.params.id;
  await Product.updateOne({ _id: id }, { status: changeStatus });
  res.redirect("back");
};

module.exports.deleted = async (req, res) => {
  const id = req.params.id;
  await Product.updateOne({ _id: id }, { deleted: true });
  res.redirect("back");
};

module.exports.edited = async (req, res) => {
  const id = req.params.id;
  const detailProduct = await Product.find({ _id: id });
  res.render("admin/pages/editedProduct.pug", {
    titlePage: "Chỉnh sửa sản phẩm",
    detailProduct: detailProduct,
  });
};

module.exports.editedItem = async (req, res) => {
  const id = req.params.id;
  await Product.updateOne({ _id: id }, req.body);
  res.redirect("/admin/productList");
};

module.exports.viewed = async (req, res) => {
  const id = req.params.id;
  const detailProduct = await Product.find({ _id: id });
  res.render("admin/pages/viewDetail.pug", {
    titlePage: "Chi tiết sản phẩm",
    detailProduct: detailProduct,
  });
};

module.exports.created = async (req, res) => {
  res.render("admin/pages/created.pug", {
    titlePage: "Tạo mới sản phẩm",
  });
};

module.exports.createdPost = async (req, res) => {
  await new Product(req.body).save();
  res.redirect("back");
  
};
