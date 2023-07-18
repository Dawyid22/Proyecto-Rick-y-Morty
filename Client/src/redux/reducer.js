import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";

let inicialState = { myFavorites: [], allCharacters: [] };

export default function reducer(state = inicialState, { type, payload }) {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, 
        allCharacters: payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    case FILTER:
      const allCharacterFiltered = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: allCharacterFiltered,
      };

    case ORDER:
      const allCharacterCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allCharacterCopy.sort((a, b) => a.id - b.id)
            : allCharacterCopy.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
}
