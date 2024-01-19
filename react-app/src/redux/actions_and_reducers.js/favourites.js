const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const addToFavourites = (song) => ({ type: ADD_TO_FAVOURITES, payload: song });
export const removeFromFavourites = (song) => ({ type: REMOVE_FROM_FAVOURITES, payload: song });

const initialState = {
  favourites: [],
};

const favouritesReducers = (state = initialState, action) => {
  const favourites = state.favourites;
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      favourites.push(action.payload);
      return { ...state, favourites: favourites };
    case REMOVE_FROM_FAVOURITES:
      const index = favourites.findIndex((song) => song === action.payload);
      favourites.splice(index, 1);
      return { ...state, favourites };
    default:
      return state;
  }
};

export default favouritesReducers;
