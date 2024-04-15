const  express = require ("express");
const router = express.Router();
const authen = require ("../../controllers/client/authen.controllers")

router.get("/",authen.login);
router.post("/",authen.loginPost);


router.get("/forgotPass",authen.forgotPass);
router.post("/forgotPass",authen.forgotPassPost);

module.exports = router

