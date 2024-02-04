const express = require("express");
const {
  categoryController,
  categoryStatusController,
} = require("../../controllers/categoryController");
const router = express.Router();

router.post("/createcategory", categoryController);
router.post("/categorystatus", categoryStatusController);

module.exports = router;
