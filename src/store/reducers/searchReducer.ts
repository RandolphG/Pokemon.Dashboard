import { createReducer, current } from "@reduxjs/toolkit";
import {
  SEARCH,
  SORT,
  SORT_REVERSE,
  GET_ALL_POKEMON,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE,
  GET_ALL_POKEMON_RESULTS,
} from "../actions";
import { Pokemon } from "../../components";

interface ISearch {
  allResults: Pokemon[];
  results: Pokemon[];
  filteredResults: Pokemon[];
  searchInput: string;
  count: number | null;
}

const initialState: ISearch = {
  allResults: [],
  results: [],
  filteredResults: [],
  searchInput: "",
  count: null,
};

export const searchReducer = createReducer(initialState, {
  [GET_POKEMON_SUCCESS]: (state, { results }) => {
    return {
      ...state,
      results,
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
        if (searchInput === "") {
          return true;
        } else if (result.name.toLowerCase().includes(searchInput.toLowerCase())) {
          return true;
        }
        return false;
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
});
