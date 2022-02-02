import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "../utils/Loader";
import { PokemonCard } from "../pokemon/PokemonCard";

export const PokedexBody = () => {
  const { pokemons, loading } = useSelector((state) => state.pokemons);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="body-container animate__animated animate__fadeInUp ">
          {pokemons.map(({ id, name, sprites, types }) => (
            <PokemonCard
              key={id}
              id={id}
              name={name}
              sprites={sprites}
              types={types}
            />
          ))}
        </div>
      )}
    </>
  );
};
