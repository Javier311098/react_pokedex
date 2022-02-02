import React from "react";
import { Pagination } from "./Pagination";
import { Search } from "./Search";

export const NavBar = () => {
  return (
    <div className="navbar-container animate__animated animate__fadeInDown">
      <div className="navbar-title">
        <h1>Pokedex</h1>
        <img
          alt="pokedex"
          src="http://i.ebayimg.com/images/g/HCgAAOxy63FSrBOH/s-l500.jpg"
        />
      </div>
      <Pagination />
      <Search />
    </div>
  );
};
