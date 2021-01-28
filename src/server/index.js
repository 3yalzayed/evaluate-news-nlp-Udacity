const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const mockAPIResponse = require("./mockAPI.js");
const fetch = require("node-fetch");

dotenv.config();

// variables

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Initialize the main project folder
app.use(express.static("dist"));

// configuring express
app.use(express.json());

// Cors for cross origin allowance
var cors = require("cors");
app.use(cors());

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile("dist/index.html");
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.post("/add-url", addURL);
async function addURL(req, res) {
  const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
  const apiURL =
    baseURL + `key=${process.env.API_KEY}&lang=auto&url=${req.body.url}`;
  const raspone = await fetch(apiURL);
  try {
    const data = await raspone.json();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log("error", error);
  }
}

app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
