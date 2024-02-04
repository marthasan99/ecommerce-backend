const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.js");
const categoryRoutes = require("./category.js");

router.use("/auth", authRoutes);
router.use("/category", categoryRoutes);

module.exports = router;
