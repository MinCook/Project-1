const  express = require ("express");
const router = express.Router();
const register = require ("../../controllers/client/register.controllers")

router.get("/",register.register);
router.post("/",register.registerPost);


module.exports = router