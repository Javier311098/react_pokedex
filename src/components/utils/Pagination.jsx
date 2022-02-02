import React, { useEffect } from "react";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { currentPage } from "../../redux/actions/pagination";

export const Pagination = () => {
  const {
    pagination: { totalPages, actualPage },
    pokemons: { loading },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const page = JSON.parse(localStorage.getItem("page") || 0);
    dispatch(currentPage(parseInt(page)));
  }, [dispatch]);

  const handleNextPage = () => {
    dispatch(currentPage(Math.min(actualPage + 1, totalPages - 1)));
    localStorage.setItem("page", Math.min(actualPage + 1, totalPages - 1));
  };

  const handleLastPage = () => {
    dispatch(currentPage(Math.max(actualPage - 1, 0)));
    localStorage.setItem("page", Math.max(actualPage - 1, 0));
  };

  return (
    <div className="pagination-container">
      <div className="pagination-container-info">
        <button
          disabled={loading ? true : false}
          className="pagination-buttons"
          onClick={handleLastPage}
        >
          <AiFillStepBackward />
        </button>
        <span>
          {actualPage + 1} of {totalPages}
        </span>
        <button
          disabled={loading ? true : false}
          className="pagination-buttons"
          onClick={handleNextPage}
        >
          <AiFillStepForward />
        </button>
      </div>
    </div>
  );
};
