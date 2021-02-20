import {
  GET_POKEMON,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE,
  UPDATE_RIGHT_PANEL,
  UPDATE_LEFT_PANEL,
  GET_POKEMON_DETAILS_REQUEST,
  GET_POKEMON_DETAILS_SUCCESS,
  GET_POKEMON_DETAILS_FAILURE,
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
});

export const getPokemonDetailsFailure = error => ({ type: GET_POKEMON_DETAILS_FAILURE, error });

/* toggle panels*/
export const toggleRightPanel = () => ({ type: UPDATE_RIGHT_PANEL });

export const toggleLeftPanel = () => ({ type: UPDATE_LEFT_PANEL });
