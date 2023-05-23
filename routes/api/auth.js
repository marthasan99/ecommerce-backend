const express = require("express");
const registrationController = require("../../controllers/registrationControllers");
const loginController = require("../../controllers/loginController");
const emailVerificationOtpMatch = require("../../helpers/emailVerificationOtpMatch");
const router = express.Router();

router.post("/registration", registrationController);
router.post("/login", loginController);
router.post("/emailVerificationOtpMatch", emailVerificationOtpMatch);

module.exports = router;
