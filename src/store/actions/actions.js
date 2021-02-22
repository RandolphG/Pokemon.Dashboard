import {
  GET_POKEMON,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE,
  UPDATE_RIGHT_PANEL,
  UPDATE_LEFT_PANEL,
  GET_POKEMON_DETAILS_REQUEST,
  GET_POKEMON_DETAILS_SUCCESS,
  GET_POKEMON_DETAILS_FAILURE,
  SEARCH,
  GET_ALL_POKEMON,
  SORT,
  SORT_REVERSE,
  GET_ALL_POKEMON_RESULTS,
} from './actionType';

/* get pokemon  */
export const getPokemonRequest = () => ({ type: GET_POKEMON });

export const getPokemonSuccess = ({ results, count, next, previous }) => ({
  type: GET_POKEMON_SUCCESS,
  results,
  count,
  next,
  previous,
});

export const getPokemonFailure = error => ({ type: GET_POKEMON_FAILURE, error });

/* get pokemon details */
export const getPokemonDetailsRequest = name => ({ type: GET_POKEMON_DETAILS_REQUEST, name });

export const getPokemonDetailsSuccess = ({
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
}) => ({
  type: GET_POKEMON_DETAILS_SUCCESS,

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
});

export const getPokemonDetailsFailure = error => ({ type: GET_POKEMON_DETAILS_FAILURE, error });

export const setSearchInput = searchInput => {
  return { type: SEARCH, searchInput };
};

export const setSort = () => ({ type: SORT });

export const setSortReverse = () => ({ type: SORT_REVERSE });

export const setAllResults = allResults => ({ type: GET_ALL_POKEMON, allResults });

export const getAllResults = () => ({ type: GET_ALL_POKEMON_RESULTS });

export const toggleRightPanel = payload => ({ type: UPDATE_RIGHT_PANEL, payload: payload });

export const toggleLeftPanel = payload => ({ type: UPDATE_LEFT_PANEL, payload: payload });
