/* eslint-disable */

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");

var app = express();
var compiler = webpack(config);
var IP="0.0.0.0"; // c9
var serverPort = process.env.PORT || 3000;

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(serverPort, IP, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://"+IP+":" + serverPort);
});
