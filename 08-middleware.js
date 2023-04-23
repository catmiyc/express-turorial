const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./autherize");
const morgon = require("morgan");
// req => middleware => res

// app.use([logger, authorize]);
app.use(morgon("tiny"));
app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/about", (req, res) => {
  res.send("about page");
});
app.get("/api/products", (req, res) => {
  res.send("products page");
});
app.get("/api/items", (req, res) => {
  res.send("items page");
});
app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
