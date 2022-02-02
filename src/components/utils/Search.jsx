import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = ({ target }) => {
    if (target.value.length >= 15) {
      setInputValue("");
    } else {
      setInputValue(target.value);
    }
  };

  const handleSearch = () => {
    if (inputValue.length >= 1) {
      navigate(`/${process.env.REACT_APP_REPO_NAME}/${inputValue}`);
    } else {
      Swal.fire(
        "Error",
        "You need write a pokemon name or pokedex number",
        "error"
      );
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          autoComplete="false"
          type="text"
          onChange={handleInputChange}
          onKeyPress={(event) => event.key === "Enter" && handleSearch()}
          value={inputValue}
          name="inputValue"
          placeholder="Buscar pokemon..."
        />
        <button onClick={handleSearch} className="search-button">
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
