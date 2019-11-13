import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../Contexts/MovieContext";
import no_image from "../images/no-image.png";

const MovieCard = ({ movie }) => {
  const { imgBaseUrl, imgPoster } = useContext(MovieContext);

  return (
    <>
      <div className="card">
        <div className="card-image">
          {/* <Link to={`/movie/${movie.id}`}> */}
          <Link
            to={{ pathname: `/movie/${movie.id}`, title: `${movie.title}` }}
          >
            <img
              src={
                movie.poster_path
                  ? `${imgBaseUrl}${imgPoster}${movie.poster_path}`
                  : no_image
              }
              alt={movie.title}
            />{" "}
            <span className="waves-effect waves-teal btn-flat">
              {movie.title}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
