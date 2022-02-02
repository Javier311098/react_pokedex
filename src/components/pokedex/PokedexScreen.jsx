import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  resetPokemonsSelected,
  startGetPokemons,
} from "../../redux/actions/pokemon";
import { NavBar } from "../utils/NavBar";
import { PokedexBody } from "./PokedexBody";

export const PokedexScreen = () => {
  const { actualPage } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetPokemonsSelected());
    dispatch(startGetPokemons());
  }, [dispatch, actualPage]);

  return (
    <>
      <NavBar />
      <PokedexBody />
    </>
  );
};
