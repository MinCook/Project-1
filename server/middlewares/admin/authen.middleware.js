const Account = require("../../models/account.model");
const Roles = require("../../models/roles.model");
module.exports.requireAuth = async (req, res, next) => {
  if (!req.cookies.token) {
    res.redirect("/admin/login");
  } else {
    const user = await Account.findOne({ token: req.cookies.token }).select(
      "-password"
    );
    if (user) {
      const roles = await Roles.findOne({
        _id: user.id_role,
      });
      res.locals.user = user;
      res.locals.role = roles;
      next();
    } else {
      res.redirect("/admin/login");
    }
  }
};
