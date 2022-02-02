import { types } from "../types/types";

const initState = {
  loading: true,
  error: false,
  pokemons: [],
  pokemonSelected: {
    id: 0,
    name: "",
    types: [{ type: { name: "" } }, { type: { name: "" } }],
    sprites: {
      other: {
        dream_world: { front_default: "" },
        home: { front_default: "" },
      },
    },
    stats: [
      { base_stat: 0 },
      { base_stat: 0 },
      { base_stat: 0 },
      { base_stat: 0 },
      { base_stat: 0 },
      { base_stat: 0 },
    ],
  },
};

export const pokemonsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.getPokemons:
      return { ...state, pokemons: action.payload };
    case types.pokemonSelected:
      return { ...state, pokemonSelected: action.payload };
    case types.pokemonResetSelected:
      return { ...state, pokemonSelected: initState.pokemonSelected };
    case types.loadedPokemon:
      return { ...state, loading: action.payload };
    case types.pokemonError:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
