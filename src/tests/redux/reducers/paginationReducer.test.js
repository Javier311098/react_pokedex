import { paginationReducer } from "../../../redux/reducers/paginationReducer";
import { types } from "../../../redux/types/types";

describe("Testing Pagination ||Redux Reducers", () => {
  const initState = {
    totalPages: 28,
    actualPage: 0,
  };
  test("should return default state", () => {
    const state = paginationReducer(initState, {});
    expect(state).toEqual(initState);
  });
  test("should return totalPages", () => {
    const totalPages = 10;
    const action = { type: types.totalPages, payload: totalPages };
    const state = paginationReducer(initState, action);
    expect(state).toEqual({ ...state, totalPages });
  });
  test("should return currentPage", () => {
    const actualPage = 1;
    const action = { type: types.currentPage, payload: actualPage };
    const state = paginationReducer({}, action);
    expect(state).toEqual({ ...state, actualPage });
  });
});
