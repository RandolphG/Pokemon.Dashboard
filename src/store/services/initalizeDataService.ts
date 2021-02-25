import store from "../store";
import { setAllResults } from "../actions";
import { PokemonDetailsReducer } from "../../components";

const url = {
  base: "https://pokeapi.co/api/v2/",
  ability: "https://pokeapi.co/api/v2/ability/",
  characteristic: "https://pokeapi.co/api/v2/characteristic/",
  pokemon: "https://pokeapi.co/api/v2/pokemon/",
  types: "https://pokeapi.co/api/v2/type/",
  stats: "https://pokeapi.co/api/v2/stat",
};

const limit = (limit: number) => `?limit=${limit}`;

interface PokemonType {
  name: string;
}

export interface ResponseDetailsData {
  id: string;
  order: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  stats: { base_state: number, stat: { name: string } }[];
  sprites: {
    front_default: "string",
    back_shiny: "string",
  };
  types: { type: PokemonType }[];
}

export interface PokemonListData {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string }[];
}

interface AllResultsData {
  results: { name: string }[];
}

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
const setCurrentDetailsLocalStorage = (data: ResponseDetailsData) => {
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
    console.log(`DATA`, data);

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
  getPokemonDetails: async (name: string): Promise<PokemonDetailsReducer | undefined> => {
    try {
      const data = await fetch(`${url.pokemon}${name}`).then(res => res.json());

      setCurrentDetailsLocalStorage(data);

      return {
        id: data.id,
        order: data.order,
        name: data.name,
        base_experience: data.base_experience,
        height: data.height,
        weight: data.weight,
        abilities: data.abilities,
        stats: data.stats,
        sprites: {
          front_default: data.sprites.front_default,
          back_shiny: data.sprites.back_shiny,
        },
        types: data.types.map(({ name }: PokemonType) => name),
      };
    } catch (error) {
      console.log(error);
      return undefined;
    }
  },
};
