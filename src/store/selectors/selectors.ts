import { createSelector } from "reselect";
import { RootState } from "../../components";

export const appState = (state: RootState) => state.pokemonReducer;

export const details = (state: RootState) => state.pokemonDetailsReducer;

export const buttons = (state: RootState) => state.buttonsReducer;

export const getLeftButtonState = createSelector(buttons, state => state.leftPanelShow);

export const getRightButtonState = createSelector(buttons, state => state.rightPanelShow);

export const getNext = createSelector(appState, state => state.next);

export const getPrevious = createSelector(appState, state => state.previous);

export const getCount = createSelector(appState, state => state.count);

export const getResults = createSelector(appState, pokemonReducer => pokemonReducer.results);

export const getFilteredResults = createSelector(
  appState,
  pokemonReducer => pokemonReducer.filteredResults
);

export const getSearchInput = createSelector(
  appState,
  pokemonReducer => pokemonReducer.searchInput
);

export const getSprites = createSelector(details, state => state.sprites);

export const getPokemonBasicDetails = createSelector(details, state => {
  return [
    { name: "id", value: state.id },
    { name: "order", value: state.order },
    { name: "height", value: state.height },
    { name: "weight", value: state.weight },
    { name: "experience", value: state.base_experience },
  ];
});

export const getPokemonAbilities = createSelector(details, state => state.abilities);

export const getPokemonStats = createSelector(details, state => state.stats);

export const getPokemonTypes = createSelector(details, state => state.types);

/*
export const getPokemonStats = createSelector(
  details,
  state =>
    state.stats &&
    state.stats.reduce((stats: Stat[], data) => {
      const newStat = {
        name: data.name,
        baseStat: data.baseStat,
      };
      return [...stats, newStat];
    }, [])
);
*/

/*
export const getPokemonAbilities = createSelector(
  details,
  state =>
    state.abilities &&
    state.abilities.reduce((abilities: string[], data) => {
      return [...abilities, data];
    }, [])
);
*/

/*
export const getPokemonTypes = createSelector(
  details,
  (state: PokemonDetailsReducer) =>
    state.types &&
    state.types.reduce((types: string[], data) => {
      return [...types, data];
    }, [])
);
*/
