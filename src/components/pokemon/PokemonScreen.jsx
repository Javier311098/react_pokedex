import React, { useEffect } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { GiPokecog } from "react-icons/gi";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loader } from "../utils/Loader";
import { useDispatch } from "react-redux";
import { startGetOnePokemon } from "../../redux/actions/pokemon";

export const PokemonScreen = () => {
  const dispatch = useDispatch();
  const { pokemonSelected, loading, error } = useSelector(
    (state) => state.pokemons
  );
  const { pokemonName } = useParams();
  const { name, id, sprites, types, stats } = pokemonSelected;
  const pokeImg = sprites.other.dream_world.front_default;
  const pokeImg2 = sprites.other.home.front_default;

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(startGetOnePokemon(pokemonName));
    if (error) {
      navigate(`/${process.env.REACT_APP_REPO_NAME}`);
    }
  }, [dispatch, pokemonName, error, navigate]);

  const handleGoBack = () => {
    navigate(`/${process.env.REACT_APP_REPO_NAME}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="pokemon-container ">
          <div className="pokemon-button-container">
            <button className="pokemon-button" onClick={handleGoBack}>
              <MdOutlineArrowBack />
            </button>
          </div>
          <div className="pokemon-container-cards">
            <div
              className={`pokemon-screen-card animate__animated animate__backInLeft  ${types[0].type.name}`}
            >
              <p>#{id}</p>
              <p>{name}</p>
              <img src={!pokeImg ? pokeImg2 : pokeImg} alt="pokemon" />
              <div className="pokemon-screen-info">
                <p>{types[0].type.name}</p>
                {types[1] && <p>{types[1].type.name}</p>}
              </div>
            </div>

            <div className="pokemon-screen-stats animate__animated animate__backInRight">
              <div className="pokemons-stats-info">
                <p>
                  Hp: <b> {stats[0].base_stat}</b>
                </p>
                <p>
                  Attack: <b> {stats[1].base_stat}</b>
                </p>
                <p>
                  Defense: <b>{stats[2].base_stat} </b>
                </p>
                <p>
                  Special Attack: <b> {stats[3].base_stat}</b>
                </p>
                <p>
                  Special Defense: <b>{stats[4].base_stat}</b>
                </p>
                <p>
                  Speed: <b> {stats[5].base_stat}</b>
                </p>
              </div>
              <div className="pokeball-container">
                <GiPokecog className="pokeball-img" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
