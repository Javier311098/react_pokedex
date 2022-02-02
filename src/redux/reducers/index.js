import { combineReducers } from "redux";
import { paginationReducer } from "./paginationReducer";
import { pokemonsReducer } from "./pokemonsReducer";

export const reducers = combineReducers({
  pagination: paginationReducer,
  pokemons: pokemonsReducer,
});
