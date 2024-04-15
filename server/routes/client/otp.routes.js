const  express = require ("express");
const router = express.Router();
const otp = require ("../../controllers/client/otp.controllers")

router.post("/",otp.otpPost);
router.post("/changePass",otp.changePass);


module.exports = router