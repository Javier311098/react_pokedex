import { types } from "../types/types";

const initState = {
  totalPages: 28,
  actualPage: 0,
};

export const paginationReducer = (state = initState, action) => {
  switch (action.type) {
    case types.totalPages:
      return { ...state, totalPages: action.payload };

    case types.currentPage:
      return { ...state, actualPage: action.payload };

    default:
      return state;
  }
};
