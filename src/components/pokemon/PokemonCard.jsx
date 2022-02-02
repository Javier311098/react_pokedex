import React from "react";
import { useNavigate } from "react-router-dom";

export const PokemonCard = ({ id, name, sprites, types }) => {
  const navigate = useNavigate();

  const handleMoreInformation = () => {
    navigate(`/${process.env.REACT_APP_REPO_NAME}/${name}`);
  };

  return (
    <div
      onClick={handleMoreInformation}
      className={`card-container ${types[0].type.name}`}
    >
      <div className="card-title">
        <p>#{id}</p>
      </div>

      <div className="card-body">
        <img alt="pokemon" src={sprites.front_default} />
      </div>

      <div className="card-information-container">
        <div className="card-information">
          <p>{name}</p>
        </div>

        <div className="card-types">
          <p>{types[0].type.name}</p>
          {types[1] && <p>{types[1].type.name}</p>}
        </div>
      </div>
    </div>
  );
};
