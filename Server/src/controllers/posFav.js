const { Favorite } = require("../DB_connection");

module.exports = async (req, res) => {
  const {name, origin, status, image, species, gender } = req.body;
  try {

    if (!name)
      return res.status(401).send("Faltan datos");

    await Favorite.create({
        name, origin, status, image, species, gender 
    });

    const allFavorites = await Favorite.findAll();
    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
