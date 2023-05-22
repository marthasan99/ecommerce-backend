const express = require("express");
const router = express.Router();
const apiRoutes = require("./api");
const api = process.env.BASE_URL;

router.use(api, apiRoutes);
router.use(api, (req, res) => res.json("No API found in this route"));
router.get("./", (req, res) => res.json("router"));
module.exports = router;
