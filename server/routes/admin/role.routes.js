const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/roles.controllers");
router.get("/", controller.roles);
router.patch("/", controller.rolePatch);
router.post("/", controller.rolePost);

router.patch("/:id", controller.roleDelete);

module.exports = router;
