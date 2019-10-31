import React, { useState, createContext, useEffect } from "react";
import { apiKey, apiUrl, imgBaseUrl, imgBig, imgPoster } from "../config";

export const MovieContext = createContext();

const MovieContextProvider = props => {
  const [movies, setMovies] = useState([]);
  const [popularMovie, setpopularMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [movie, setMovie] = useState(null);
  const [actors, setActors] = useState(null);
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    setLoading(true);
    const endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&page=1`;
    getMovies(endpoint);
    console.log("use effect hook");
    setLoading(false);
  }, []);

  const getMovie = async endpoint => {
    setLoading(true);
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data);

      if (data.status_code) {
        setLoading(false);
      } else {
        setMovie(data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getMoviePeoples = async endpoint => {
    try {
      setLoading(true);
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data);
      const directors = data.crew.filter(person => person.job === "Director")
      setDirectors(directors)
      setActors(data.cast)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getMovies = async endpoint => {
    setLoading(true);
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data);
      setMovies([...data.results]);
      console.log(movies);
      setpopularMovie(
        popularMovie ||
          data.results[Math.floor(Math.random() * (data.results.length / 2))]
      );
      setCurrentPage(data.page);
      setTotalPages(data.total_pages);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // method for more movies btn
  const getMoreMovies = async () => {
    let endpoint = "";
    setLoading(true);
    if (searchTerm === "") {
      endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&page=${currentPage +
        1}`;
    } else {
      endpoint = `${apiUrl}search/movie?api_key=${apiKey}&query=${searchTerm}&page=${currentPage +
        1}`;
    }
    await fetchMoreMovies(endpoint);
  };

  const fetchMoreMovies = async endpoint => {
    setLoading(true);
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data);
      setMovies([...movies, ...data.results]);
      console.log(movies);
      // setpopularMovie(popularMovie || data.results[Math.floor(Math.random()*(data.results.length/2))])
      setCurrentPage(data.page);
      setTotalPages(data.total_pages);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // getMovies(endpoint);

  const searchMovies = async searchTerm => {
    console.log(searchTerm);
    console.log(movies);
    let endpoint = "";

    setMovies([]);
    setLoading(true);
    console.log(movies);

    if (searchTerm === "") {
      endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&page=1`;
    } else {
      console.log(123);
      endpoint = `${apiUrl}search/movie?api_key=${apiKey}&query=${searchTerm}`;
    }

    // setMovies([])

    await getMovies(endpoint);

    console.log(movies);
  };

  return (
    <MovieContext.Provider
      value={{
        popularMovie,
        searchMovies,
        movies,
        setMovies,
        loading,
        imgBaseUrl,
        imgPoster,
        getMoreMovies,
        searchTerm,
        setSearchTerm,
        currentPage,
        totalPages,
        getMovies,
        getMovie,
        movie,
        getMoviePeoples,
        directors,
        actors
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
