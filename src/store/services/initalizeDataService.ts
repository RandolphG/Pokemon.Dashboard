import store from "../store";
import { setAllResults } from "../actions";
import {
  Ability,
  AllResultsData,
  DetailsData,
  PokemonListData,
  PokemonStats,
  PokemonType,
  ResponseData,
} from "./types";

const url = {
  base: "https://pokeapi.co/api/v2/",
  pokemon: "https://pokeapi.co/api/v2/pokemon/",
};

const limit = (limit: number) => `?limit=${limit}`;

/**
 * set local data
 * @param data
 */
const setPokemonLocalStorage = (data: PokemonListData) => {
  localStorage.setItem("pokemon_list", JSON.stringify(data));
};

/**
 * set current pokemon details
 * @param data
 */
const setDetailsLocalStorage = (data: DetailsData) => {
  localStorage.setItem("current_details", JSON.stringify(data));
};

/**
 * set current all results
 * @param data
 */
const setFullListLocalStorage = (data: AllResultsData) => {
  localStorage.setItem("all_results_details", JSON.stringify(data));
};

/**
 * fetch country & flag data
 * @returns {Promise<*>}
 */
export const api = {
  getPokemon: async (): Promise<PokemonListData> => {
    const data: PokemonListData = await fetch(`${url.pokemon}`).then(res => res.json());
    const count = data.count;
    const fullList = await fetch(`${url.pokemon}${limit(count)}`).then(res => res.json());

    setPokemonLocalStorage(data);
    setFullListLocalStorage(fullList.results);
    store.dispatch(setAllResults(fullList.results));

    return {
      results: data.results,
      count: data.count,
      next: data.next,
      previous: data.previous,
    };
  },
  getPokemonDetails: async (name: string): Promise<DetailsData> => {
    const data: ResponseData = await fetch(`${url.pokemon}${name}`).then(res => res.json());
    const types = data.types;
    const stats = data.stats;
    const abilities = data.abilities;

    const pokemonAbilities: Ability[] = abilities.map(({ ability }: any) => ({
      name: ability.name,
    }));
    const pokemonTypes: PokemonType[] = types.map(({ type }: any) => ({ name: type.name }));
    const pokemonStats: PokemonStats[] = stats.map(({ base_stat, stat }: any) => ({
      name: stat.name,
      baseStat: base_stat,
    }));

    const details = {
      id: data.id,
      abilities: pokemonAbilities,
      base_experience: data.base_experience,
      name: data.name,
      order: data.order,
      height: data.height,
      weight: data.weight,
      stats: pokemonStats,
      sprites: {
        front_default: data.sprites.front_default,
        back_shiny: data.sprites.back_shiny,
      },
      types: pokemonTypes,
    };

    setDetailsLocalStorage(details);

    console.log(`POKEMON DETAILS`, details);

    return {
      id: data.id,
      abilities: pokemonAbilities,
      base_experience: data.base_experience,
      height: data.height,
      name: data.name,
      order: data.order,
      sprites: {
        front_default: data.sprites.front_default,
        back_shiny: data.sprites.back_shiny,
      },
      stats: pokemonStats,
      types: pokemonTypes,
      weight: data.weight,
    };
  },
};
