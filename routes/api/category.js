const express = require("express");
const {
  categoryController,
  categoryStatusController,
  subCategoryController,
  subCategoryStatusController,
} = require("../../controllers/categoryController");
const router = express.Router();

router.post("/createcategory", categoryController);
router.post("/categorystatus", categoryStatusController);
router.post("/subcategorystatus", subCategoryStatusController);
router.post("/createsubcategory", subCategoryController);

module.exports = router;
