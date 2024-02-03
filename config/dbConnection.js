const mongoose = require("mongoose");
function dbConnection() {
  mongoose
    .connect(
      "mongodb+srv://marthasan:ascfasfdsgdsdhb@cluster0.ovu5nu1.mongodb.net/orebi?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected!"));
}

module.exports = dbConnection;
