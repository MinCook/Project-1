const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "png"],
  folder: "Project_1",
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
