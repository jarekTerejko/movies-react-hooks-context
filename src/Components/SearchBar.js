import React, { useState, useContext } from "react";
import {MovieContext} from '../Contexts/MovieContext' 


const SearchBar = () => {


    const {searchMovies, setMovies, movies, searchTerm, setSearchTerm} = useContext(MovieContext)


  // const [searchTerm, setSearchTerm] = useState("");



  const handleSubmit = e => {
    e.preventDefault()
    console.log(movies)
    // setMovies([])
    searchMovies(searchTerm)
    // setSearchTerm('')
    console.log(movies)
  }



  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <div className="input-field col s6">
        <input id="last_name" type="text" name="searchTerm" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
        <label htmlFor="last_name">Search...</label>
      </div>
      <button type="submit" className="btn">Search</button>
      </form>
      SearchBar
    </div>
  );
};

export default SearchBar;
