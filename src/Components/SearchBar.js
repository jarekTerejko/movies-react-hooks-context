import React, { useState, useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";

const SearchBar = () => {
  const { searchMovies, movies, searchTerm, setSearchTerm } = useContext(
    MovieContext
  );

  const handleSubmit = e => {
    e.preventDefault();
    console.log(movies);
    // setMovies([])
    searchMovies(searchTerm);
    // setSearchTerm('')
    console.log(movies);
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="col s12"
        style={{ marginTop: "40px" }}
      >
        <div className="input-field">
          <input
            id="searchTerm"
            type="text"
            name="searchTerm"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <label htmlFor="searchTerm">Search...</label>
        </div>
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
