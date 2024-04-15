const Account = require("../../models/account.model");
const Roles = require("../../models/roles.model");
module.exports.account = async (req, res) => {
  const accountList = await Account.find({ deleted: false });
  res.render("admin/pages/account.pug", {
    AccountList: accountList,
  });
};
module.exports.accountForm = async (req, res) => {
  const role = await Roles.find();
  res.render("admin/pages/createdAccount.pug", {
    id_role: role,
  });
};
module.exports.accountFormPost = async (req, res) => {
  const exitEmail = await Account.find({
    fullName: req.body.fullName,
  });

  if (exitEmail.length > 0) {
    res.redirect("back");
  } else {
    await new Account(req.body).save();
    const accountList = await Account.find();
    res.render("admin/pages/account.pug", {
      AccountList: accountList,
    });
  }
};

module.exports.accountFormEdit = async (req, res) => {};
module.exports.accountFormEditPatch = async (req, res) => {
  const id = req.params.id;
  const exitEmail = await Account.find({
    _id: { $ne: id },
    email: req.body.email,
    deleted: false,
  });

  if (exitEmail.length) {
    res.redirect("/admin/account");
  } else {
    await Account.updateOne({ _id: id }, req.body);
    res.redirect("/admin/account");
  }
};

module.exports.deleted = async (req, res) => {
  const id = req.params.id;
  await Account.updateOne({ _id: id }, { deleted: true });
  res.redirect("back");
};

module.exports.edited = async (req, res) => {
  const id = req.params.id;
  const account = await Account.findOne({ _id: id }, { deleted: false });
  res.render("admin/pages/accountEdited.pug", {
    Account: account,
  });
};
