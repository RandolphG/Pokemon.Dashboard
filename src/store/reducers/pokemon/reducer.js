import { createReducer } from '@reduxjs/toolkit';
import {
  UPDATE_LEFT_PANEL,
  UPDATE_RIGHT_PANEL,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE,
  GET_POKEMON_DETAILS_SUCCESS,
} from './actionType';
/* Pokemon name */
const initialState = {
  results: [],
  next: null,
  previous: null,
  count: null,
  rightPanelShow: false,
  leftPanelShow: false,
};

/* set pokemon name to store */
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
  [UPDATE_RIGHT_PANEL]: (state, action) => ({
    ...state,
    rightPanelShow: !action.payload,
  }),
  [UPDATE_LEFT_PANEL]: (state, action) => ({
    ...state,
    leftPanelShow: !action.payload.error,
  }),
});

const details = {
  id: null,
  name: '',
  species: null,
  base_experience: null,
  height: null,
  is_default: null,
  order: null,
  weight: null,
  abilities: null,
  stats: null,
  held_items: null,
  moves: null,
  sprites: null,
};

export const pokemonDetailsReducer = createReducer(details, {
  [GET_POKEMON_DETAILS_SUCCESS]: (
    state,
    {
      id,
      name,
      species,
      base_experience,
      height,
      is_default,
      order,
      weight,
      abilities,
      stats,
      held_items,
      moves,
      sprites,
    }
  ) => ({
    ...state,
    id,
    name,
    species,
    base_experience,
    height,
    is_default,
    order,
    weight,
    abilities,
    stats,
    held_items,
    moves,
    sprites,
  }),
});
