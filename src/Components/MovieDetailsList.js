import React, { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { apiKey, apiUrl, imgBaseUrl, imgBig, imgPoster } from "../config";

const MovieDetailsList = () => {
  const { movie } = useContext(MovieContext);
  console.log(movie);

  if (movie) {
    return (
      <div className="container">
        <h2>Info</h2>
        <ul className="collection with-header">
          <li className="collection-header">
            <h5>
              {movie.production_countries.length > 1
                ? "Production Countries"
                : "Production Country"}
            </h5>
          </li>
          {movie.production_countries
            ? movie.production_countries.map((country, i) => {
                return (
                  <li className="collection-item" key={i}>
                    {country.name}
                  </li>
                );
              })
            : null}
        </ul>
        <ul className="collection with-header">
          <li className="collection-header">
            <h5>
              {movie.production_companies.length > 1
                ? "Production Companies"
                : "Production Company"}
            </h5>
          </li>
          {movie.production_companies
            ? movie.production_companies.map((company, i) => {
                return (
                  <li className="collection-item" key={i}>
                    {company.name}
                  </li>
                );
              })
            : null}
        </ul>
        <ul className="collection with-header">
          <li className="collection-header">
            <h5>{movie.genres.length > 1 ? "Genres" : "Genre"}</h5>
          </li>
          {movie.genres
            ? movie.genres.map((genre, i) => {
                return (
                  <li className="collection-item" key={i}>
                    {genre.name}
                  </li>
                );
              })
            : null}
        </ul>
        <ul className="collection with-header">
          <li className="collection-header">
            <h5>Other Details</h5>
          </li>
          {movie.original_language && <li className="collection-item">
            Language: {movie.original_language}
          </li>} 
          {movie.release_date && <li className="collection-item">Premiere: {movie.release_date}</li>}
          {movie.homepage ? (
            <li className="collection-item">
              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Site <i class="material-icons">link</i>
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default MovieDetailsList;
