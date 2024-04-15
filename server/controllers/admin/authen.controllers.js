const Account = require("../../models/account.model");


module.exports.login = async (req, res) => {
  res.render("admin/pages/loginAdmin.pug");
};
module.exports.loginPost = async (req, res) => {
  const body = JSON.parse(JSON.stringify(req.body));
  const pass = body.pass;
  const email = body.email;
  const user = await Account.findOne({
    email: email,
    deleted: false,
  });
  if (user != null && pass == user.password) {
    res.cookie("token", user.token);
    res.redirect("/admin/dashboard");
  } else {
    res.redirect("/admin/login");
  }
};

module.exports.logout = async (req, res) => {
  res.clearCookie("token");
  res.redirect("/admin/login");
};
