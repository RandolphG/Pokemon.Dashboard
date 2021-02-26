export interface Pokemon {
  name?: string;
  type: PokemonType;
}

export interface PokemonType {
  name: string;
}

export interface Ability {
  name: string;
}

export interface Abilities {
  ability: Ability[];
}

export interface Sprites {
  front_default: string;
  back_shiny: string;
}

export interface Stat {
  name: string;
}

export interface Stats {
  base_stat: number;
  name: Stat;
}

export interface PokemonStats {
  baseStat: number;
  name: string;
}

export interface Results {
  name: string;
}

export interface ResponseData {
  id: number;
  abilities: Abilities[];
  base_experience: number;
  height: number;
  name: string;
  order: number;
  sprites: Sprites;
  stats: Stats[];
  types: Pokemon[];
  weight: number;
}

export interface DetailsData {
  id: number | null;
  abilities: Ability[] | null;
  base_experience: number | null;
  height: number | null;
  name: string;
  order: number | null;
  sprites: Sprites | null;
  stats: PokemonStats[] | null;
  types: PokemonType[];
  weight: number | null;
}

export interface PokemonListData {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: Results[];
}

export interface AllResultsData {
  results: Results[];
}
