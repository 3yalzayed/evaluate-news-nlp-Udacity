const dotenv = require("dotenv");
dotenv.config();

projectData = {};

// set aylien API credentias
var textapi = {
  application_key: `${process.env.API_KEY}`,
};
console.log(`Your API key is ${process.env.API_KEY}`);

// variables
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Initialize the main project folder
app.use(express.static("dist"));

const lang = "en";
const mockAPIResponse = require("./mockAPI.js");
var path = require("path");

// configuring express
app.use(express.json());

// Initialize the main project folder
app.use(express.static("dist"));

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile("dist/index.html");
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
