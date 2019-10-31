import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import { MovieContext } from "../Contexts/MovieContext";
import no_image from "../images/no-image.png";

const MovieCard = ({ movie }) => {
  const { imgBaseUrl, imgPoster } = useContext(MovieContext);

  console.log(movie);
  return (
      <>
    {/* <div>
      <img
        src={
          movie.poster_path
            ? `${imgBaseUrl}${imgPoster}${movie.poster_path}`
            : no_image
        }
      />
      <p>{movie.title}</p>
    </div> */}
    {/* <div class="row"> */}
    {/* <div class="col s12 m4"> */}
      <div class="card">
        <div class="card-image">
        {/* <Link to={`/movie/${movie.id}`}> */}
        <Link to={{pathname: `/movie/${movie.id}`, title: `${movie.title}`}}>

          <img src={
          movie.poster_path
            ? `${imgBaseUrl}${imgPoster}${movie.poster_path}`
            : no_image
        } /> <span className="waves-effect waves-teal btn-flat">{movie.title}</span>
              </Link>

        </div>
        {/* <div class="card-content">
          <h5>{movie.title}</h5>
        </div> */}
      </div>
    {/* </div> */}
  {/* </div> */}
  </>
  );
};

export default MovieCard;
