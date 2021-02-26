import { combineReducers } from "redux";
import { buttonsReducer } from "./buttonReducer";
import { pokemonReducer } from "./pokemonReducer";
import { searchReducer } from "./searchReducer";
import { detailsReducer } from "./detailReducer";

const rootReducer = () =>
  combineReducers({
    pokemonReducer,
    searchReducer,
    detailsReducer,
    buttonsReducer,
  });

export default rootReducer;
