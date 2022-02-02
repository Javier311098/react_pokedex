import React from "react";
import { CgPokemon } from "react-icons/cg";
export const Loader = () => {
  return (
    <div className="spinner-img-container">
      <CgPokemon className="img-loader" />
      <h2>Loading...</h2>
    </div>
  );
};
