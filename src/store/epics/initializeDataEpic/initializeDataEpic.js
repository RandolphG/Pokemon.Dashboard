import { ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { api } from "../../services";
import {
  GET_POKEMON,
  GET_POKEMON_DETAILS_REQUEST,
  getPokemonDetailsFailure,
  getPokemonDetailsSuccess,
  getPokemonFailure,
  getPokemonSuccess,
} from "../../actions";
import { fromFetch } from "rxjs/fetch";
import { ajax } from "rxjs/ajax";
import { Ability, PokemonStats, PokemonType } from "../../services/types";

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
        map(data => getPokemonDetailsSuccess(data)),
        catchError(error => of(getPokemonDetailsFailure(error)))
      );
    })
  );

/*
export const getFetchDetailsEpic = action$ =>
  action$.pipe(
    ofType(GET_POKEMON_DETAILS_REQUEST),
    fromFetch("https://pokeapi.co/api/v2/pokemon/bulbasaur").pipe(
      switchMap(response => {
        if (response.ok) {
          // OK return data
          console.log(`OK DATA RETURN`, response.json());
          return response.json();
        } else {
          // Server is return a status so client can do something
          return of({ error: true, message: `Error: ${response.status}` });
        }
      }),
      catchError(err => {
        // Network or other error, handle appropriately
        console.error(err);
        return of({ error: true, message: err.message });
      })
    )
  );
*/

export const getFetchDetailsEpic = action$ =>
  action$.pipe(
    ofType(GET_POKEMON_DETAILS_REQUEST),
    mergeMap(() =>
      ajax.getJSON(`https://pokeapi.co/api/v2/pokemon/bulbasaur`).pipe(
        map(response => {
          if (response.ok) {
            // OK return data
            const types = response.types;
            const stats = response.stats;
            const abilities = response.abilities;

            const pokemonAbilities = abilities.map(({ ability }) => ({
              name: ability.name,
            }));
            const pokemonTypes = types.map(({ type }) => ({ name: type.name }));
            const pokemonStats = stats.map(({ base_stat, stat }) => ({
              name: stat.name,
              baseStat: base_stat,
            }));

            const details = {
              id: response.id,
              abilities: pokemonAbilities,
              base_experience: response.base_experience,
              name: response.name,
              order: response.order,
              height: response.height,
              weight: response.weight,
              stats: pokemonStats,
              sprites: {
                front_default: response.sprites.front_default,
                back_shiny: response.sprites.back_shiny,
              },
              types: pokemonTypes,
            };

            console.log(`EPICS__POKEMON DETAILS`, details);

            return getPokemonDetailsSuccess(details);
            /*
            if (response.ok) {
              // OK return data
              console.log(`OK DATA RETURN`, response.json());
              return response.json();
            } else {
              // Server is return a status so client can do something
              return of({ error: true, message: `Error: ${response.status}` });
            }
            */
          } else {
            // Server is return a status so client can do something
            return of({ error: true, message: `Error: ${response.status}` });
          }
        })
      )
    ),
    catchError(err => {
      // Network or other error, handle appropriately
      console.error(err);
      return of({ error: true, message: err.message });
    })
  );

export default {
  initializeDataEpic,
  getDetailsEpic,
  getFetchDetailsEpic,
};
