import { pokemonsReducer } from "../../../redux/reducers/pokemonsReducer";
import { types } from "../../../redux/types/types";

describe("Testing Pokemon ||Redux Reducers", () => {
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
  test("should return default state", () => {
    const state = pokemonsReducer(initState, {});
    expect(state).toEqual(initState);
  });
  test("should return getPokemons state", () => {
    const pokemon = { name: "pikachu", id: 17, types: ["electric"] };
    const action = { type: types.getPokemons, payload: pokemon };
    const state = pokemonsReducer(initState, action);
    expect(state).toEqual({ ...state, pokemons: pokemon });
  });
  test("should return pokemonSelected state", () => {
    const pokemon = { name: "pikachu", id: 17, types: ["electric"] };
    const action = { type: types.pokemonSelected, payload: pokemon };
    const state = pokemonsReducer(initState, action);
    expect(state).toEqual({ ...state, pokemonSelected: pokemon });
  });

  test("should return pokemonResetSelected state", () => {
    const action = { type: types.pokemonResetSelected };
    const state = pokemonsReducer({}, action);
    expect(state).toEqual({
      ...state,
      pokemonSelected: initState.pokemonSelected,
    });
  });
  test("should return loadedPokemon state", () => {
    const action = { type: types.loadedPokemon, payload: false };
    const state = pokemonsReducer({}, action);
    expect(state).toEqual({ ...state, loading: false });
  });
  test("should return pokemonError state", () => {
    const error = "something went wrong";
    const action = { type: types.pokemonError, payload: error };
    const state = pokemonsReducer({}, action);
    expect(state).toEqual({ ...state, error });
  });
});
