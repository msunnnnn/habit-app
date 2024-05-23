const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://margaretsun:1KFX2OOLVAdX0XZv@cluster0.zr5cl5i.mongodb.net/"
  )
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error Connecting to MongoDB", error);
  });

app.listen(port, () => {
  console.log("Server running on port 3000");
});
