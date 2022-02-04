import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { currentPage, getTotalPages } from "../../../redux/actions/pagination";
import { types } from "../../../redux/types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore({});

describe("Testing Pagination ||Redux Actions", () => {
  test("should return getTotalPages()", () => {
    const total = 12;
    const limit = 3;
    store.dispatch(getTotalPages(total, limit));
    const pages = Math.ceil(total / limit);
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: types.totalPages, payload: pages });
  });

  test("should return currentPage()", () => {
    const page = 10;
    const action = currentPage(page);
    expect(action).toEqual({ type: types.currentPage, payload: page });
  });
});
