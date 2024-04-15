const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/account.controllers");
router.get("/", controller.account);

router.get("/create", controller.accountForm);
router.post("/create", controller.accountFormPost);

router.patch("/edit/:id", controller.accountFormEditPatch);

router.patch("/deleted/:id", controller.deleted);
router.patch("/edited/:id", controller.edited);

module.exports = router;
