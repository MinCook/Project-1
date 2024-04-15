const User = require("../../models/user.model");
const Cart = require("../../models/cart.model");
const ForgotEmail = require("../../models/forgotPass.model");
const random = require("../../public/js/randomString.js");

module.exports.login = async (req, res) => {
  res.render("client/pages/login.pug");
};

module.exports.loginPost = async (req, res) => {
  const email = req.body.email;
  const password = req.body.pass;
  const exitsUser = await User.findOne({
    email: email,
    password: password,
  });

  if (exitsUser) {
    await Cart.updateOne({_id:req.cookies.cartID},{user_id:exitsUser.id})
    res.cookie("userToken",exitsUser.tokenUser);
    res.redirect("/user");
  } else {
    res.redirect("back");
  }
};
module.exports.forgotPass = async (req, res) => {
  res.render("client/pages/forgotPass.pug");
};

module.exports.forgotPassPost = async (req, res) => {
  const email = req.body.email;
  const exitsEmail = await User.findOne({ email: email });
  if (exitsEmail) {
    const otpCode = random.randomString(8);
    const otp = {
      email: email,
      otp: otpCode,
      expireAt: Date.now(),
    };
    await new ForgotEmail(otp).save();
    res.render("client/pages/otp.pug", {
      email: email,
    });
  } else {
    res.redirect("back");
  }
};
