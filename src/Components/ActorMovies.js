import React, { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { Link } from "react-router-dom";

export const ActorMovies = () => {
  const { actorMovies } = useContext(MovieContext);

  if (actorMovies) {
    return (
      <div className="container">
        <ul className="collection with-header">
          <li className="collection-item">
            <h3>Acting</h3>
          </li>

          {
            (actorMovies
              .filter(movie => {
                return movie.release_date;
              })
              .sort((a, b) => {
                return (
                  Number(b.release_date.substring(0, 4)) -
                  Number(a.release_date.substring(0, 4))
                );
              })
              .map((movie, i) => {
                return (
                  <li className="collection-item" key={i}>
                    <span style={{ marginRight: "15px" }}>
                      {movie.release_date.substring(0, 4)}{" "}
                    </span>
                    <Link
                      className="grey-text"
                      to={{ pathname: `/movie/${movie.id}` }}
                      style={{
                        fontWeight: 500,
                        fontSize: "20px",
                        marginRight: "15px"
                      }}
                    >
                      {movie.title}
                    </Link>{" "}
                    as <span>{movie.character}</span>
                  </li>
                );
              }))
          }
        </ul>
      </div>
    );
  } else {
    return null;
  }
};
