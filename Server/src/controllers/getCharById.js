const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios(URL + id);
    const { name, status, species, origin, image, gender } = response.data;

    if (name) {
      const character = {
        id,
        name,
        status,
        species,
        origin,
        image,
        gender,
      };

      return res.json(character);
    }

    return res.status(404).send("Not found");

  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getCharById };

// .then((response) => response.data)
// .then(({ id, name, status, species, origin, image, gender }) => {
//   if (name) {
//     const character = {
//       id,
//       name,
//       status,
//       species,
//       origin,
//       image,
//       gender,
//     };

//     return res.json(character);
//   }

//   return res.status(404).send("Not found");
// })
// .catch((error) => res.status(500).send(error.message));
