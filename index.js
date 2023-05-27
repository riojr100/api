const express = require("express");
// Initialize Express
const app = express();

app.get("/", (req, res) => {
  res.send("running on vercel");
});

app.listen(5000, () => {
  console.log("Server is running in port 5000");
});

module.exports = app;
