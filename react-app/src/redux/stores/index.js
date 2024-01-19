import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import fetchDataReducer from "../actions_and_reducers.js/fetchData.js";
import favouritesReducers from "../actions_and_reducers.js/favourites.js";
import playSongReducers from "../actions_and_reducers.js/songPlayed.js";

const rootReducer = combineReducers({
  favourites: favouritesReducers,
  data: fetchDataReducer,
  song: playSongReducers,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
