import React, { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import MovieCard from "./MovieCard";

const Grid = props => {
  const { movies, loading } = useContext(MovieContext);

  const renderElements = () => {
    const gridMovies = movies.map((movie, i) => {
      return <MovieCard movie={movie} key={i} clickable={true} />;
    });
    return gridMovies;
  };

  return (
    <div className="container">
      {props.header && !loading ? <h3>{props.header}</h3> : null}
      <div className="grid-container">{renderElements()}</div>
    </div>
  );
};

export default Grid;
