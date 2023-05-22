require("dotenv").config();
const express = require("express");
const dbConnection = require("./config/dbConnection");
const routes = require("./routes");
var cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
dbConnection();
app.use(routes);

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.listen(8000);

//mongodb+srv://marthasan94:<password>@cluster0.dcs87uf.mongodb.net/?retryWrites=true&w=majority

//mongodb+srv://marthasan:mdy7VTqqDUiYZz8G@cluster0.ovu5nu1.mongodb.net/orebi?retryWrites=true&w=majority
