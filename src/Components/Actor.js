import React, { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { apiKey, apiUrl, imgBaseUrl, imgBig, imgPoster } from "../config";
import no_image from "../images/no-image.png";

const Actor = () => {
  const { movie, directors, actors } = useContext(MovieContext);

  const posterSize = "w154";

  if (actors) {
      return (
    <div className="grid-container container" style={{marginTop: "20px"}}>
      {actors.map(actor => {
        return (
          <div className="center card" style={{paddingTop: "15px"}}>
            <img className="responsive-img"
              src={
                actor.profile_path
                  ? `${imgBaseUrl}${posterSize}${actor.profile_path}`
                  : no_image
              }
              alt={actor.name}
            />
            <h5>{actor.name}</h5>
            <p>{actor.character}</p>
          </div>
        );
      })}
    </div>
  );
    } else {
        return null
    }
};

export default Actor;
