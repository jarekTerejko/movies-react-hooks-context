import React, { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { apiKey, apiUrl, imgBaseUrl, imgBig, imgPoster } from "../config";

const MovieDetails = () => {
  const { movie, directors, actors } = useContext(MovieContext);
  console.log(movie);

  const convertTime = data => {
    const min = data % 60;
    const h = (data - min) / 60;
    return `${h}h${min}min`;
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });

  if (movie) {
    return (
      <div
        className="movie-details-hero"
        style={{
          background: movie.backdrop_path
            ? `linear-gradient(to bottom, rgba(0,0,0,.1) 20%, rgba(0,0,0,.9) 100%), url('${imgBaseUrl}${imgBig}${movie.backdrop_path}')`
            : "black",
          display: "flex",
          /* justify-content: center; */
          alignItems: "center",
          minHeight: "80vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "10px 0"
        }}
      >
        {/* <div className="container"> */}
        <div className="movie-details-content container">
          <div className="movie-details-content__img">
            <img
              src={`${imgBaseUrl}${imgPoster}${movie.poster_path}`}
              style={{ display: "block", maxWidth: "100%" }}
            />
          </div>
          <div className="movie-details-content__description">
            <h1 style={{ marginTop: 0 }}>{movie.title}</h1>
            <p>PLOT</p>
            <p>{movie.overview}</p>
            {directors.length > 1 ? <p>DIRECTORS</p> : <p>DIRECTOR</p>}
            {directors.map((director, i) => {
              return (
                <p style={{ margin: 0 }} key={i}>
                  {director.name}
                </p>
              );
            })}
            <div className="movie-details-content__bar">
              <p>
                <i class="left material-icons">access_time</i>Runtime:{" "}
                {convertTime(movie.runtime)}
              </p>
              <p>
                <i class="left material-icons">attach_money</i>Budget:{" "}
                {formatter.format(movie.budget)}
              </p>
              <p>
                <i class="left material-icons">beenhere</i>Revenue:{" "}
                {formatter.format(movie.revenue)}
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  } else {
    return null
  }
};

export default MovieDetails;
