import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  getError,
  resetPokemonsSelected,
  startGetOnePokemon,
  startGetPokemons,
} from "../../../redux/actions/pokemon";
import { types } from "../../../redux/types/types";
import Swal from "sweetalert2";

jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore({});

describe("Testing Pokemon ||Redux Actions", () => {
  beforeEach(() => {
    store.clearActions();
  });
  test("should return startGetPokemons()", async () => {
    store = mockStore({ pagination: { actualPage: 3 } });
    await store.dispatch(startGetPokemons());
    const actions = store.getActions();

    expect(actions[0]).toEqual({ type: types.loadedPokemon, payload: true });
    expect(actions[1]).toEqual({ type: types.totalPages, payload: 28 });
    expect(actions[2]).toEqual({
      type: types.loadedPokemon,
      payload: false,
    });
    expect(actions[3]).toEqual({
      type: types.getPokemons,
      payload: expect.any(Array),
    });
  });

  test("should return startGetOnePokemon()", async () => {
    const name = 12;
    await store.dispatch(startGetOnePokemon(name));
    const actions = store.getActions();

    expect(actions[0]).toEqual({ type: types.loadedPokemon, payload: true });
    expect(actions[1]).toEqual({ type: types.pokemonError, payload: false });
    expect(actions[2]).toEqual({
      type: types.pokemonSelected,
      payload: expect.any(Object),
    });
    expect(actions[3]).toEqual({ type: types.loadedPokemon, payload: false });
  });

  test("should return startGetOnePokemon() error", async () => {
    const name = "pik";
    await store.dispatch(startGetOnePokemon(name));

    expect(Swal.fire).toHaveBeenCalledWith(
      "Error",
      "Could not find Pokemon",
      "error"
    );
  });

  test("should return getError()", () => {
    const action = getError("something went wrong");
    expect(action).toEqual({
      type: types.pokemonError,
      payload: "something went wrong",
    });
  });
  test("should return resetPokemonsSelected()", () => {
    const action = resetPokemonsSelected();
    expect(action).toEqual({ type: types.pokemonResetSelected });
  });
});
