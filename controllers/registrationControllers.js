const emailValidation = require("../helpers/emailValidation");
const passwordValidation = require("../helpers/passwordValidation");
const User = require("../models/usersModel.js");
const bcrypt = require("bcrypt");
const otpTemplate = require("../helpers/otpTemplate.js");
const sendEmail = require("../helpers/sendEmail.js");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");
const nodemailer = require("nodemailer");

let registrationController = async (req, res) => {
  const { fullName, email, password, avatar, facebookId, linkedinId } =
    req.body;

  if (!fullName) {
    return res.send({ error: "Enter full name" });
  } else if (!email) {
    return res.send({ error: "Enter email" });
  } else if (!emailValidation(email)) {
    return res.send({ error: "Enter a valid email" });
  } else if (!password) {
    return res.send({ error: "Enter password" });
  } else if (!passwordValidation(password)) {
    return res.send({ error: "Enter a valid password" });
  } else {
    let duplicateEmail = await User.find({ email: email });
    if (duplicateEmail.length > 0) {
      return res.send({ error: "Email already exist, Try another" });
    }

    bcrypt.hash(password, 10, async function (err, hash) {
      const user = new User({
        fullName,
        email,
        password: hash,
        avatar,
        facebookId,
        linkedinId,
      });

      user.save();

      const generator = aleaRNGFactory(Date.now());
      let randomNumber = generator.uInt32().toString().substring(0, 4);

      let randomOtpStore = await User.findOneAndUpdate(
        { email },
        { $set: { randomOtp: randomNumber } },
        { new: true }
      );

      // sendEmail(email, randomOtpStore.randomOtp, otpTemplate);
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "mart.hasan94@gmail.com",
          pass: "otqxzomcvucvcawp",
        },
      });

      let info = await transporter.sendMail({
        from: "mart.hasan94@gmail.com",
        to: email,
        subject: "Please verify your email",
        html: otpTemplate(randomNumber),
      });

      // setTimeout(async function () {
      //   let randomOtpStore = await User.findOneAndUpdate(
      //     { email },
      //     { $unset: { randomOtp: "" } },
      //     { new: true }
      //   );
      // }, 60 * 1000);

      return res.send({
        success: "Registration Successful. Please check your email",
        email: user.email,
        fullName: user.fullName,
      });
    });

    // return res.send({ error: "Registration Successful" });
  }
};

module.exports = registrationController;
