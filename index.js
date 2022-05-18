const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const todolistRoute = require("./routes/todolist");

//CONNECT DATABASE
mongoose
  .connect("mongodb://localhost/myFirstDatabase?retryWrites=true&w=majority")
  .then(() => {
    console.log("success!");
  })
  .catch((e) => console.log(e));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(morgan("common"));

//Route
app.use("/v1/todolist", todolistRoute);

app.listen(8000, () => {
  console.log("Server is running...");
});
