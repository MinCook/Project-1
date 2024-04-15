const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/productList.controllers");
const uploader = require("../../middlewares/admin/cloudinary")




router.get("/", controller.productList);
router.patch("/changeStatus/:id/:status", controller.changeStatus);
router.patch("/deleted/:id", controller.deleted);
router.post("/edited/:id", controller.edited);
router.patch(
  "/edited/:id",
  controller.editedItem
 );



router.get("/created", controller.created);
router.post("/created",uploader.single('images'),controller.createdPost);


router.post("/viewed/:id", controller.viewed);


module.exports = router;
