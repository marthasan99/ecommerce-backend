const express = require("express");
const registrationController = require("../../controllers/registrationControllers");
const router = express.Router();

router.post("/registration", registrationController);

module.exports = router;
