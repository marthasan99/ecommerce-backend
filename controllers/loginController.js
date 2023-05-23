const emailValidation = require("../helpers/emailValidation");
const passwordValidation = require("../helpers/passwordValidation");
const User = require("../models/usersModel");

let loginController = async (req, res) => {
  let { email, password } = req.body;

  if (!email) {
    return res.send({ error: "Enter email" });
  } else if (!emailValidation(email)) {
    return res.send({ error: "Enter a valid email" });
  } else if (!password) {
    return res.send({ error: "Enter password" });
  } else if (!passwordValidation(password)) {
    return res.send({ error: "Enter a valid password" });
  } else {
    let isEmailExist = await User.find({ email });

    if (isEmailExist.length > 0) {
      bcrypt
        .compare(password, isEmailExist[0].password)
        .then(function (result) {
          if (result) {
            return res.send({
              success: "Login Successful.",
              email: isEmailExist.email,
            });
          } else {
            res.json({ error: "Password not matched" });
          }
        });
    } else {
      res.json({ error: "Email not matched" });
    }
  }
};

module.exports = loginController;
