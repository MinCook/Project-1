const  express = require ("express");
const router = express.Router();
const cart = require ("../../controllers/client/cart.controllers")


router.get("/",cart.cart);
router.get("/:id",cart.cartDelete);
router.get("/order",cart.cartOrder);
module.exports = router