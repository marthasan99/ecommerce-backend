const express = require("express");
const {
  categoryController,
  categoryStatusController,
  subCategoryController,
  subCategoryStatusController,
  getAllCategory,
  getAllSubCategory,
} = require("../../controllers/categoryController");
const router = express.Router();

router.post("/createcategory", categoryController);
router.post("/categorystatus", categoryStatusController);
router.post("/subcategorystatus", subCategoryStatusController);
router.post("/createsubcategory", subCategoryController);
router.get("/getallcategories", getAllCategory);
router.get("/getallsubcategories", getAllSubCategory);

module.exports = router;
