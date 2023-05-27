const express = require("express");
const axios = require("axios");
// Initialize Express
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
// manga/searchMangaById/{id}
app.get("/manga/searchMangaById/:id", (request, response) => {
  const id = request.params.id.split(",");
  axios.get(`https://api.jikan.moe/v4/manga/${id}`).then((res) => {
    response.send(res.data);
  });
});
// manga/searchManga/{string}
app.get("/manga/searchManga/:query", (request, response) => {
  const query = request.params.query.split(",");
  axios.get(`https://api.jikan.moe/v4/manga/?q=${query}&page=1`).then((res) => {
    response.send(res.data);
  });
});
// /manga/recommendation
app.get("/manga/recommendation", (request, response) => {
  axios
    .get("https://api.jikan.moe/v4/recommendations/manga?page=1")
    .then((res) => {
      response.send(res.data);
    });
});

app.listen(5000, () => {
  console.log("Server is running in port 5000");
});

module.exports = app;
