const  express = require ("express");
const products = require ("../../controllers/client/products.controllers")
const cart = require ("../../controllers/client/cart.controllers")
const search = require ("../../controllers/client/search.controllers")
const router = express.Router();


router.get("/",products.products);
router.post("/addCart/:id",cart.cartAdd);
// router.get("/search",search.search);
// router.get("/search/:id",search.searchDetail);
module.exports = router