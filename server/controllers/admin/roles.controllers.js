const Roles = require("../../models/roles.model");
module.exports.roles = async (req, res) => {
  const roles = await Roles.find({ deleted: false });
  res.render("admin/pages/roles.pug", {
    Roles: roles,
  });
};

module.exports.rolePost = async (req, res) => {
  await new Roles(req.body).save();
  res.redirect("back");
};

module.exports.roleDelete = async (req, res) => {
  const id = req.params.id;
  await Roles.updateOne({ _id: id }, { deleted: true });
  res.redirect("/admin/roles");
};

module.exports.rolePatch = async (req, res) => {
  const permission = JSON.parse(req.body.permission);
  for (const item of permission) {
    await Roles.updateOne({ _id: item.id }, { permissions: item.permission });
  }
  res.redirect("back");
};

module.exports.permissions = async (req, res) => {
  const roles = await Roles.find();
  res.render("admin/pages/permission.pug", {
    Roles: roles,
  });
};
