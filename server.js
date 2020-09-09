var express = require("express");
var path = require("path");
var logger = require("morgan");
var favicon = require("serve-favicon");

var app = express();

require("dotenv").config();
require("./config/database");

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

// app.use("/api/election/cart", require('./routes/api/cart'));
app.use("/api/locations", require('./routes/api/locations'));
app.use("/api/officials", require('./routes/api/officials'));

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Express app listening on port ${port}`);
});
