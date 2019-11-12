import React, { useContext } from "react";
import { MovieContext } from "./../Contexts/MovieContext";
import Spinner from "./Spinner";

const LoadMoreBtn = () => {
  const { getMoreMovies, currentPage, totalPages, loading } = useContext(
    MovieContext
  );

  if (loading) {
    return <Spinner />;
  } else {
    if (currentPage >= totalPages && !loading) {
      return (
        <div className="container">
          <h4 style={{ margin: "30px 0" }} className="red-text text-darken-4">
            There is no more movies to show...
          </h4>
        </div>
      );
    } else {
      return (
        <div className="container">
          <button
            style={{ margin: "30px 0" }}
            className="btn waves-effect waves-light grey darken-4"
            onClick={getMoreMovies}
          >
            Load More
          </button>
        </div>
      );
    }
  }
};

export default LoadMoreBtn;
