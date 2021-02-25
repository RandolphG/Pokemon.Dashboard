import { combineReducers } from "redux";
import { buttonsReducer, pokemonReducer, pokemonDetailsReducer } from "./reducer";

const rootReducer = () =>
  combineReducers({
    pokemonReducer,
    pokemonDetailsReducer,
    buttonsReducer,
  });

export default rootReducer;
