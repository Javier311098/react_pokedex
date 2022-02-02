import { fetchPokemon } from "../../helpers/fetchPokemon";
import { getTotalPages } from "./pagination";
import { types } from "../types/types";
import Swal from "sweetalert2";

export const startGetPokemons = () => {
  return async (dispatch, getState) => {
    const { actualPage } = getState().pagination;
    dispatch(loadingPokemons(true));
    const limit = 40;
    const resp = await fetchPokemon(
      `pokemon?limit=${limit}&offset=${limit * actualPage}`
    );
    const body = await resp.json();
    const totalPokemons = body.count;
    const resultados = body.results;
    const pokemons = await Promise.all(
      resultados.map(async (resultado) => {
        const newResp = await fetchPokemon(`pokemon/${resultado.name}`);
        return await newResp.json();
      })
    );
    dispatch(getTotalPages(totalPokemons, limit));
    dispatch(loadingPokemons(false));
    dispatch(getPokemons(pokemons));
  };
};

const getPokemons = (pokemons) => ({
  type: types.getPokemons,
  payload: pokemons,
});

export const startGetOnePokemon = (name) => {
  return async (dispatch) => {
    try {
      dispatch(loadingPokemons(true));
      const resp = await fetchPokemon(`pokemon/${name}`);
      if (resp.status === 404) {
        Swal.fire("Error", "Could not find Pokemon", "error");
        dispatch(getError(true));
      }
      dispatch(getError(false));
      const pokemon = await resp.json();
      dispatch(pokemonSelected(pokemon));
      dispatch(loadingPokemons(false));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getError = (error) => ({
  type: types.pokemonError,
  payload: error,
});

const loadingPokemons = (loading) => ({
  type: types.loadedPokemon,
  payload: loading,
});

export const resetPokemonsSelected = () => ({
  type: types.pokemonResetSelected,
});

const pokemonSelected = (pokemon) => ({
  type: types.pokemonSelected,
  payload: pokemon,
});
