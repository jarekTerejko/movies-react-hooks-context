import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../Contexts/MovieContext";
import { imgBaseUrl } from "../config";
import no_image from "../images/no-image.png";

const Actor = () => {
  const { actors } = useContext(MovieContext);

  const posterSize = "w154";

  if (actors) {
    return (
      <div className=" container">
        <h2>Cast</h2>
        <div className="grid-container" style={{ marginTop: "20px" }}>
          {actors.map((actor, i) => {
            return (
              <div
                key={i}
                className="center card"
                style={{ paddingTop: "15px" }}
              >
                <img
                  className="responsive-img"
                  src={
                    actor.profile_path
                      ? `${imgBaseUrl}${posterSize}${actor.profile_path}`
                      : no_image
                  }
                  alt={actor.name}
                />
                <Link
                  style={{ color: "black" }}
                  to={{ pathname: `/actor/${actor.id}` }}
                >
                  <h5 style={{ fontWeight: 500 }}>{actor.name}</h5>
                </Link>
                <p>{actor.character}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Actor;
