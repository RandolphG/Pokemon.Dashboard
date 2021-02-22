import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { api } from '../../services';
import {
  GET_POKEMON,
  GET_POKEMON_DETAILS_REQUEST,
  getPokemonDetailsFailure,
  getPokemonDetailsSuccess,
  getPokemonFailure,
  getPokemonSuccess,
} from '../../reducers';

export const initializeDataEpic = action$ =>
  action$.pipe(
    ofType(GET_POKEMON),
    switchMap(() => {
      return from(api.getPokemon()).pipe(
        map(({ results, count, next, previous }) =>
          getPokemonSuccess({ results, count, next, previous })
        ),
        catchError(error => of(getPokemonFailure(error)))
      );
    })
  );

export const getDetailsEpic = action$ =>
  action$.pipe(
    ofType(GET_POKEMON_DETAILS_REQUEST),
    switchMap(({ name }) => {
      return from(api.getPokemonDetails(name)).pipe(
        map(
          ({
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
          }) =>
            getPokemonDetailsSuccess({
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
            })
        ),
        catchError(error => of(getPokemonDetailsFailure(error)))
      );
    })
  );

export default {
  initializeDataEpic,
  getDetailsEpic,
};
