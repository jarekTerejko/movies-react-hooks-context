import React, { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";

const SearchBar = () => {
  const { searchMovies, searchTerm, setSearchTerm } = useContext(MovieContext);

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies(searchTerm);
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
        <button
          type="submit"
          className="btn waves-effect waves-light grey darken-4"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
