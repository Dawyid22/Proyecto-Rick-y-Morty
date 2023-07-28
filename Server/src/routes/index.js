const routes = require("express").Router();
const getCharById  = require("../controllers/getCharById");
const login = require('../controllers/login')
const postUser = require('../controllers/postUser')
const postFav = require('../controllers/posFav')
const deleteFav = require('../controllers/deleteFav')


routes.get("/login", login);

routes.post("/login", postUser);

routes.post("/fav", postFav);

routes.delete("/fav/:id", deleteFav);

routes.get("/character/:id", getCharById);

module.exports = routes;
