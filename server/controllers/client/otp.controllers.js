const forgotPass = require("../../models/forgotPass.model");
const User = require("../../models/user.model");

module.exports.otpPost = async (req, res) => {
  const email = req.body.email;
  const otp = req.body.otp;

  const otpCheck = await forgotPass.findOne({ email: email, otp: otp });
  if (otpCheck) {
    res.render("client/pages/changePass.pug", {
      email: email,
    });
  } else {
    res.send("sai mã OTP rồi bạn ơi");
  }
};
module.exports.changePass = async (req, res) => {
  const email = req.body.email;
  const password = req.body.pass;
  const confirmPass = req.body.confirmPass;
  if (password != confirmPass) {
    res.send(" Mật khẩu không trùng khớp");
  } else {
    await User.updateOne({ email: email }, { password: password });
    res.redirect("/login");
  }
};
