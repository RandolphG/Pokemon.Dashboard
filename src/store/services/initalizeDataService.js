const url = {
  base: 'https://pokeapi.co/api/v2/',
  ability: 'https://pokeapi.co/api/v2/ability/',
  characteristic: 'https://pokeapi.co/api/v2/characteristic/',
  pokemon: 'https://pokeapi.co/api/v2/pokemon/',
  types: 'https://pokeapi.co/api/v2/type/',
  stats: 'https://pokeapi.co/api/v2/stat',
};

/**
 * set local data
 * @param data
 * @param ttl
 */
const setPokemonLocalStorage = data => {
  localStorage.setItem('pokemon_list', JSON.stringify(data));
};

/**
 * set current pokemon details
 * @param data
 */
const setCurrentDetailsLocalStorage = data => {
  localStorage.setItem('current_details', JSON.stringify(data));
};

/**
 * fetch country & flag data
 * @returns {Promise<*>}
 */
export const api = {
  getPokemon: async () => {
    try {
      const data = await fetch(`${url.pokemon}`).then(res => res.json());

      setPokemonLocalStorage(data);

      return {
        results: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous,
      };
    } catch (error) {
      console.log(error);
    }
  },
  getPokemonDetails: async name => {
    try {
      const data = await fetch(`${url.pokemon}${name}`).then(res => res.json());

      setCurrentDetailsLocalStorage(data);

      return {
        id: data.id,
        name: data.name,
        base_experience: data.base_experience,
        height: data.height,
        is_default: data.is_default,
        order: data.order,
        weight: data.weight,
        abilities: data.abilities,
        stats: data.stats,
        held_items: data.held_items,
        moves: data.moves,
        sprites: data.sprites,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
