const mongoose = require("mongoose");
const random = require("../public/js/randomString");
const sendMail = require("../public/js/sendmail");
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  password: String,
  tokenUser: {
    type: String,
    default: random.randomString(20),
  },
  avatar: String,
  phone: String,
  deleted: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("User", userSchema, "user");
module.exports = User;
