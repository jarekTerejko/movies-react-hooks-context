import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../Contexts/MovieContext";

const MovieDetailsNavbar = props => {
  const { movie } = useContext(MovieContext);

  if (movie) {
    return (
      <div className="grey darken-3 white-text" style={{ padding: "10px" }}>
        <div className="container">
          <Link className="white-text" to="/">
            Home
          </Link>{" "}
          /{" "}
          <Link className="white-text" to={props.url}>
            {movie.title}
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default MovieDetailsNavbar;
