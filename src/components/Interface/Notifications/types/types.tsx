import {
  GET_ALL_POKEMON,
  GET_POKEMON_DETAILS_FAILURE,
  GET_POKEMON_DETAILS_REQUEST,
  GET_POKEMON_DETAILS_SUCCESS,
  GET_POKEMON_FAILURE,
  GET_POKEMON_SUCCESS,
  SEARCH,
} from "../../../../store/actions";
import { UPDATE_LEFT_PANEL, UPDATE_RIGHT_PANEL } from "../../../../store/actions";

export const ADD_NOTIFICATIONS = "SET_NOTIFICATIONS";

export const REMOVE_NOTIFICATIONS = "REMOVE_NOTIFICATIONS";

export interface AddNotificationAction {
  type: typeof ADD_NOTIFICATIONS;
  notifications: number[];
}

export interface RemoveNotificationAction {
  type: typeof REMOVE_NOTIFICATIONS;
  notifications: number[];
  item: number;
}

export interface RootState {
  pokemonReducer: PokemonReducer;
  pokemonDetailsReducer: PokemonDetailsReducer;
  notificationsReducer: NotificationsReducer;
  buttonsReducer: ButtonsReducer;
}

export interface NotificationsReducer {
  notifications: number[];
}

export interface Pokemon {
  name: string;
}

export interface ButtonsReducer {
  rightPanelShow: boolean;
  leftPanelShow: boolean;
}

export interface PokemonReducer {
  allResults: Pokemon[];
  results: Pokemon[];
  filteredResults: Pokemon[];
  searchInput: string;
  next: string | null;
  previous: string | null;
  count: number | null;
}

export interface PokemonDetailsReducer {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  order: number;
  weight: number;
  abilities: string[];
  stats: Stat[];
  sprites: Sprites;
  types: string[];
}

export interface GetPokemonSuccessAction {
  type: typeof GET_POKEMON_SUCCESS;
  results: Pokemon[];
  count: number | null;
  next: string | null;
  previous: string | null;
}

export interface Sprites {
  front_default: string;
  back_shiny: string;
}

export interface Stat {
  baseStat: number;
  name: string;
}

export interface SetSearchInputAction {
  type: typeof SEARCH;
  searchInput: string;
}

export interface GetPokemonFailureAction {
  type: typeof GET_POKEMON_FAILURE;
  error: Error;
}

export interface GetPokemonDetailsSuccessAction extends PokemonDetailsReducer {
  type: typeof GET_POKEMON_DETAILS_SUCCESS;
}

export interface GetPokemonDetailsRequestAction {
  type: typeof GET_POKEMON_DETAILS_REQUEST;
  name: string;
}

export interface GetPokemonDetailsFailureAction {
  type: typeof GET_POKEMON_DETAILS_FAILURE;
  error: Error;
}

export interface SetAllResultsAction {
  type: typeof GET_ALL_POKEMON;
  allResults: Pokemon[];
}

export interface ToggleRightPanelAction {
  type: typeof UPDATE_RIGHT_PANEL;
  payload: boolean;
}

export interface ToggleLeftPanelAction {
  type: typeof UPDATE_LEFT_PANEL;
  payload: boolean;
}
