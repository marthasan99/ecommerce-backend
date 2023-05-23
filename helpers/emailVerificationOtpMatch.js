const User = require("../models/usersModel");

let emailVerificationOtpMatch = async (req, res) => {
  const { email, randomOtp } = req.body;

  let findOtp = await User.find({ email });
  if (findOtp.length > 0) {
    if (randomOtp == findOtp[0].randomOtp) {
      let removeOtpAfterMatch = await User.findOneAndUpdate(
        { email },
        { $unset: { randomOtp: "" } },
        { new: true }
      );
      res.json({ success: "Otp Matched" });
    } else {
      res.json({ error: "Otp not Matched" });
    }
  }
};

module.exports = emailVerificationOtpMatch;
