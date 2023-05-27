const express = require("express");
// Initialize Express
const app = express();

app.get("/:id", (req, res) => {
  const id = req.params.id.split(",");
  res.send(`id : ${id}`);
});

app.listen(5000, () => {
  console.log("Server is running in port 5000");
});

module.exports = app;
