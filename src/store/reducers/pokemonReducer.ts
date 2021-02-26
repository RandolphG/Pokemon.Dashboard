import { createReducer } from "@reduxjs/toolkit";
import { GET_POKEMON_SUCCESS, GET_POKEMON_FAILURE } from "../actions";
import { Results } from "../services/types";

interface IPokemon {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: Results[];
}

const initialState: IPokemon = {
  results: [],
  next: null,
  previous: null,
  count: null,
};

export const pokemonReducer = createReducer(initialState, {
  [GET_POKEMON_SUCCESS]: (state, { results, count, next, previous }) => {
    return {
      ...state,
      results,
      count,
      next,
      previous,
    };
  },
  [GET_POKEMON_FAILURE]: (state, { error }) => ({
    ...state,
    error: error,
  }),
});
