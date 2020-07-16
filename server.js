var proxy = require("html2canvas-proxy")
var express = require("express")

var app = express()
var port = process.env.PORT || 3000
// Convenience for allowing CORS on routes - GET only
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Content-Type")
  next()
})

app.use("/", proxy())

console.log("Server running on port", port)
app.listen(port)
