import {
  GET_POKEMON,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE,
  UPDATE_RIGHT_PANEL,
  UPDATE_LEFT_PANEL,
  GET_POKEMON_DETAILS_REQUEST,
  GET_POKEMON_DETAILS_FAILURE,
  SEARCH,
  GET_ALL_POKEMON,
  SORT,
  SORT_REVERSE,
  GET_ALL_POKEMON_RESULTS,
  GET_POKEMON_DETAILS_SUCCESS,
} from "./actionType";
import {
  GetPokemonDetailsFailureAction,
  GetPokemonDetailsRequestAction,
  GetPokemonDetailsSuccessAction,
  GetPokemonFailureAction,
  GetPokemonSuccessAction,
  Pokemon,
  SetAllResultsAction,
  SetSearchInputAction,
  ToggleLeftPanelAction,
  ToggleRightPanelAction,
} from "../../components";
import { DetailsData, PokemonListData } from "../services/types";

export const getPokemonRequest = () => ({ type: GET_POKEMON });

export const getPokemonSuccess = ({
  results,
  count,
  next,
  previous,
}: PokemonListData): GetPokemonSuccessAction => ({
  type: GET_POKEMON_SUCCESS,
  results,
  count,
  next,
  previous,
});

export const getPokemonFailure = (error: Error): GetPokemonFailureAction => ({
  type: GET_POKEMON_FAILURE,
  error,
});

export const getPokemonDetailsRequest = (name: string): GetPokemonDetailsRequestAction => ({
  type: GET_POKEMON_DETAILS_REQUEST,
  name,
});

export const getPokemonDetailsSuccess = (data: DetailsData): GetPokemonDetailsSuccessAction => {
  console.log(`STATE STUFF`, data);

  return {
    ...data,
    type: GET_POKEMON_DETAILS_SUCCESS,
    data: data,
  };
};

export const getPokemonDetailsFailure = (error: Error): GetPokemonDetailsFailureAction => ({
  type: GET_POKEMON_DETAILS_FAILURE,
  error,
});

export const setSearchInput = (searchInput: string): SetSearchInputAction => {
  return { type: SEARCH, searchInput };
};

export const setSort = () => ({ type: SORT });

export const setSortReverse = () => ({ type: SORT_REVERSE });

export const setAllResults = (allResults: Pokemon[]): SetAllResultsAction => ({
  type: GET_ALL_POKEMON,
  allResults,
});

export const getAllResults = () => ({ type: GET_ALL_POKEMON_RESULTS });

export const toggleRightPanel = (payload: boolean): ToggleRightPanelAction => ({
  type: UPDATE_RIGHT_PANEL,
  payload,
});

export const toggleLeftPanel = (payload: boolean): ToggleLeftPanelAction => ({
  type: UPDATE_LEFT_PANEL,
  payload,
});
