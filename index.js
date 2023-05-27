const express = require("express");
const axios = require("axios");
// Initialize Express
const app = express();

app.get("/manga/:id", (req, res) => {
  const id = req.params.id.split(",");
  axios
    .get(`https://api.jikan.moe/v4/manga/${id}`)
    .then((res) => console.log(res))
    .finally((res) => console.log(res));
  res.send(`id : ${id}`);
});

app.listen(5000, () => {
  console.log("Server is running in port 5000");
});

module.exports = app;
