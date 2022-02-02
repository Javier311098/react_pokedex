import { types } from "../types/types";

export const getTotalPages = (total, limit) => {
  return (dispatch) => {
    const totalPokemons = Math.ceil(total / limit);
    dispatch(totalPages(totalPokemons));
  };
};

const totalPages = (totalPokemons) => ({
  type: types.totalPages,
  payload: totalPokemons,
});

export const currentPage = (page) => ({
  type: types.currentPage,
  payload: page,
});
