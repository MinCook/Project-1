const  express = require ("express");
const router = express.Router();
const order = require ("../../controllers/client/order.controllers")


router.get("/",order.order);
router.post("/",order.orderPost);
module.exports = router