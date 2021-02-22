import { createReducer, current } from '@reduxjs/toolkit';
import {
  SEARCH,
  SORT,
  SORT_REVERSE,
  UPDATE_LEFT_PANEL,
  UPDATE_RIGHT_PANEL,
  GET_ALL_POKEMON,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE,
  GET_POKEMON_DETAILS_SUCCESS,
  GET_ALL_POKEMON_RESULTS,
} from './actionType';

/* Pokemon name */
const initialState = {
  allResults: [],
  results: [],
  filteredResults: [],
  searchInput: '',
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
      filteredResults: results,
    };
  },
  [GET_ALL_POKEMON]: (state, { allResults }) => ({
    ...state,
    allResults,
  }),
  [GET_POKEMON_FAILURE]: (state, { error }) => ({
    ...state,
    error: error,
  }),
  [SEARCH]: (state, { searchInput }) => {
    return {
      ...state,
      searchInput,
      filteredResults: current(state).filteredResults.filter(result => {
        if (searchInput === '') {
          return current(state).results;
        } else if (result.name.toLowerCase().includes(searchInput.toLowerCase())) {
          return result;
        }
      }),
    };
  },
  [SORT]: state => ({
    ...state,
    filteredResults: current(state)
      .filteredResults.slice()
      .sort((a, b) => (a.name > b.name ? 1 : -1)),
  }),
  [SORT_REVERSE]: state => ({
    ...state,
    filteredResults: current(state)
      .filteredResults.slice()
      .sort((a, b) => (a.name < b.name ? 1 : -1)),
  }),
  [GET_ALL_POKEMON_RESULTS]: state => ({
    ...state,
    filteredResults: current(state).allResults,
  }),
  [UPDATE_RIGHT_PANEL]: (state, action) => ({
    ...state,
    rightPanelShow: action.payload,
  }),
  [UPDATE_LEFT_PANEL]: (state, action) => ({
    ...state,
    leftPanelShow: action.payload,
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
      types,
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
    types,
  }),
});
