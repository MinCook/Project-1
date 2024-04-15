const User = require("../../models/user.model");
module.exports.register = async (req, res) => {
  res.render("client/pages/register.pug");
};

module.exports.registerPost = async (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const pass = req.body.password;
  const confirmPass = req.body.confirmPassword;

  if (pass != confirmPass) {
    res.redirect("back");
  } else {
    const exitsEmail = await User.findOne({ email: email });
    const exitsFullname = await User.findOne({ fullName: fullName });
    if (exitsEmail || exitsFullname) {
      res.redirect("/login");
    } else {
      await new User(req.body).save();
      res.redirect("/login");
    }
  }
};
