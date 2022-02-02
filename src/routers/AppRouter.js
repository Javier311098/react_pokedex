import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PokedexScreen } from "../components/pokedex/PokedexScreen";
import { PokemonScreen } from "../components/pokemon/PokemonScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`${process.env.REACT_APP_REPO_NAME}/:pokemonName`}
          element={<PokemonScreen />}
        />
        <Route
          path={`${process.env.REACT_APP_REPO_NAME}/`}
          element={<PokedexScreen />}
        />

        <Route
          path="*"
          element={<Navigate to={`${process.env.REACT_APP_REPO_NAME}/`} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
