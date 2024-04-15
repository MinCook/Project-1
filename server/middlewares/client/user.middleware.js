const User = require("../../models/user.model");

module.exports.requireAuthClient = async (req, res, next) => {
  if (!req.cookies.userToken) {
    res.redirect("/admin");
  } else {
    const user = await User.findOne({
      tokenUser: req.cookies.userToken,
    }).select("-password");

    if (user) {
      res.locals.user = user;
      next();
    } else {
      res.redirect("/admin");
    }
  }
};
