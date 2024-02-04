const express = require("express");
const {
  createcategoryController,
} = require("../../controllers/createCategoryController");
const router = express.Router();

router.post("/createcategory", createcategoryController);

module.exports = router;
