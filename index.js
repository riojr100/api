const express = require("express");
const axios = require("axios");
// Initialize Express
const app = express();

app.get("/manga/searchMangaById/:id", (request, response) => {
  const id = request.params.id.split(",");
  axios.get(`https://api.jikan.moe/v4/manga/${id}`).then((res) => {
    response.send(res.data);
  });
});

app.get("/manga/searchManga/:query", (request, response) => {
  const query = request.params.query.split(",");
  axios.get(`https://api.jikan.moe/v4/manga/?q=${query}`).then((res) => {
    console.log(res.data.mal_id);
    response.send(res.data);
  });
});

app.listen(5000, () => {
  console.log("Server is running in port 5000");
});

module.exports = app;
