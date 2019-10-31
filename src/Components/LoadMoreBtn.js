import React, { useContext } from "react";
import { MovieContext } from "./../Contexts/MovieContext";

const LoadMoreBtn = () => {
  const { getMoreMovies, currentPage, totalPages, loading } = useContext(
    MovieContext
  );

  if (currentPage < totalPages && !loading) {
    return (
      <div className="container">
        <button className="btn" onClick={getMoreMovies}>
          Load More
        </button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h4>There is no more movies to show</h4>
      </div>
    );
  }
};

export default LoadMoreBtn;
