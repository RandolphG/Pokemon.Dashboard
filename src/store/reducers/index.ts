import { combineReducers } from "redux";
import { buttonsReducer, pokemonReducer, detailsReducer } from "./reducer";

const rootReducer = () =>
  combineReducers({
    pokemonReducer,
    detailsReducer,
    buttonsReducer,
  });

export default rootReducer;
