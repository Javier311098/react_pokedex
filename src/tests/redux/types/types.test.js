import { types } from "../../../redux/types/types";

describe("Testing Types for Redux", () => {
  test("should return all the types", () => {
    expect(types).toEqual({
      loadedPokemon: "[Pokemon]: Loaded",
      pokemonSelected: "[Pokemon]: Select Pokemon",
      getPokemons: "[Pokemon]: Get Pokemons",
      searchPokemon: "[Pokemon]: Search Pokemon",
      pokemonResetSelected: "[Pokemon]: Reset Select Pokemon",
      pokemonError: "[Pokemon]PokemonError",

      currentPage: "[Pagination] Current Page",
      totalPages: "[Pagination] Get total Pages",
    });
  });
});
