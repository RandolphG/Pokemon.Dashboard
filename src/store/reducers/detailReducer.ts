import { createReducer } from "@reduxjs/toolkit";
import { GET_POKEMON_DETAILS_SUCCESS } from "../actions";
import { DetailsData } from "../services/types";

const details: DetailsData = {
  id: null,
  abilities: null,
  base_experience: null,
  height: null,
  name: "",
  order: null,
  sprites: null,
  stats: null,
  types: [],
  weight: null,
};

export const detailsReducer = createReducer(details, {
  [GET_POKEMON_DETAILS_SUCCESS]: (
    state,
    { id, abilities, base_experience, height, order, name, sprites, stats, types, weight }
  ) => {
    console.log(`STATE STUFF`);

    return {
      ...state,
      id,
      abilities,
      base_experience,
      height,
      order,
      name,
      sprites,
      stats,
      types,
      weight,
    };
  },
});
