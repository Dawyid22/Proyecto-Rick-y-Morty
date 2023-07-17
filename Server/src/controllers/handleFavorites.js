let myFavorites = []

const postFav = (req, res) => {
    const character = req.body

    myFavorites.push(character)
    return res.json(myFavorites)
}

const deleteFav = (req, res) => {
    const {id} = req.params
    const deleteCharacter = myFavorites.filter((char) => char.id !== +id) 
    return res.json(deleteCharacter)
}

module.exports = {
    postFav,
    deleteFav
}