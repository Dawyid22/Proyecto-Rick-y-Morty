import { ADD_FAV, REMOVE_FAV } from "./action";

let inicialState = { myFavorites: [], access: false,
character: [] };

export default function reducer (state = inicialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== action.payload
        ),
      };

    default:
      return { ...state };
  }
};
