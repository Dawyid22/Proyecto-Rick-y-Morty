const { getCharById } = require("../controllers/getCharById");
const { login } = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const routes = require("express").Router();

routes.get("/character/:id", (req, res) => {
  getCharById(req, res);
});

routes.get("/login", (req, res) => {
  login(req, res);
});

routes.post("/fav", (req, res) => {
  postFav(req, res);
});

routes.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
});

module.exports = routes;
