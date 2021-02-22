import { createSelector } from 'reselect';

export const appState = state => state.pokemonReducer;

export const details = state => state.pokemonDetailsReducer;

export const getLeftButtonState = createSelector(appState, state => state.leftPanelShow);

export const getRightButtonState = createSelector(appState, state => state.rightPanelShow);

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

export const getSprites = createSelector(details, state => state && state.sprites);

export const getPokemonBasicDetails = createSelector(details, state => {
  return [
    { id: 'id', value: state.id },
    { id: 'order', value: state.order },
    { id: 'height', value: state.height },
    { id: 'weight', value: state.weight },
    { id: 'experience', value: state.base_experience },
  ];
});

export const getPokemonAbilities = createSelector(
  details,
  state =>
    state.abilities &&
    state.abilities.reduce((ability, data) => {
      const skill = data.ability.name;
      const newArray = { ability: skill };
      ability.push(newArray);
      return ability;
    }, [])
);

export const getPokemonStats = createSelector(
  details,
  state =>
    state.stats &&
    state.stats.reduce((stat, data) => {
      const baseState = data.base_stat;
      const name = data.stat.name;
      const newStat = { name: name, stats: baseState };
      stat.push(newStat);
      return stat;
    }, [])
);

export const getPokemonTypes = createSelector(
  details,
  state =>
    state.types &&
    state.types.reduce((type, data) => {
      const name = data.type.name;
      const newType = { name: name };
      type.push(newType);
      return type;
    }, [])
);
