import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";

let inicialState = { myFavorites: [], allCharacters: [] };

export default function reducer(state = inicialState, { type, payload }) {
  switch (type) {
    case ADD_FAV:
      const copy = [...state.allCharacters, payload];
      return {
        ...state,
        myFavorites: copy,
        allCharacters: [...copy],
      };

    case REMOVE_FAV:
      const characterFiltered = state.myFavorites.filter(
        (character) => character.id !== payload
      )
      return {
        ...state,
        myFavorites: characterFiltered,
        allCharacters: characterFiltered
      };

    case FILTER:
      const allCharacterFiltered = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: allCharacterFiltered,
      };

    case ORDER:
      const allCharacterCopy = state.allCharacters.sort((a, b) => {
        if (payload === "A") {
          if (a > b) return 1;
          if (a < b) return -1;
        } else {
          if (a > b) return -1;
          if (a > b) return 1;
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: allCharacterCopy,
      };
    default:
      return { ...state };
  }
}

// myFavorites: payload === "A" ? allCharacterCopy.sort((a, b) => a.id - b.id) : allCharacterCopy.sort((a, b) => b.id - a.id),
