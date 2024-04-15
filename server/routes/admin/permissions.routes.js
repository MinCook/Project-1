const  express = require ("express");
const router = express.Router();
const controller =require ("../../controllers/admin/roles.controllers");
router.get("/",controller.permissions);


module.exports = router