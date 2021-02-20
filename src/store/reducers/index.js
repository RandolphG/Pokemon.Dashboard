import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { pokemonReducer, pokemonDetailsReducer } from './pokemon';

const rootReducer = history =>
  combineReducers({ pokemonReducer, pokemonDetailsReducer, router: connectRouter(history) });

export default rootReducer;
export * from './pokemon';
