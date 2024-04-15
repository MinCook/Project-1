const express = require("express");
const controller = require("../../controllers/client/home.controllers");
const products = require("../../controllers/client/products.controllers");
const cart = require("../../controllers/client/cart.controllers");
const order = require("../../controllers/client/order.controllers");
const search = require("../../controllers/client/search.controllers");

const router = express.Router();

router.get("/", controller.index);
router.get("/products", products.products);
router.get("/cart", cart.cart);
router.get("/cart/:id", cart.cartDelete);
router.get("/cart/order", cart.cartOrder);

router.get("/order", order.order);

router.get("/products/search", search.search);
router.get("/products/search/:id", search.searchDetail);

module.exports = router;
