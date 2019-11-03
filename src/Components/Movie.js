import React, { useEffect, useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { apiKey, apiUrl, imgBaseUrl, imgBig, imgPoster } from "../config";
import MovieDetails from "./MovieDetails";
import Actor from "./Actor";
import Spinner from "./Spinner";
import MovieDetailsNavbar from "./MovieDetailsNavbar";
import MovieDetailsList from "./MovieDetailsList";

const Movie = props => {
  const {
    getMovie,
    movie,
    getMoviePeoples,
    directors,
    actors,
    loading
  } = useContext(MovieContext);

  useEffect(() => {
    const endpoint1 = `${apiUrl}movie/${props.match.params.movieId}?api_key=${apiKey}`;
    getMovie(endpoint1);
    const endpoint2 = `${apiUrl}movie/${props.match.params.movieId}/credits?api_key=${apiKey}`;
    getMoviePeoples(endpoint2);
    // return () => {
    //     cleanup
    // };
  }, []);

  // useEffect(() => {
  //     console.log(123)
  //     const endpoint = `${apiUrl}movie/${props.match.params.movieId}/credits?api_key=${apiKey}`
  //     getMoviePeoples(endpoint)
  //     // return () => {
  //     //     cleanup
  //     // };
  // }, [])

  console.log(movie, directors, actors);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <MovieDetailsNavbar url={props.match.params.movieId} />
      <MovieDetails />
      <MovieDetailsList/>
      <Actor />
    </div>
  );
};

export default Movie;
