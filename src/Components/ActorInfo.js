import React, { useEffect, useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { apiKey, apiUrl, imgBaseUrl, imgBig, imgPoster } from "../config";
import Spinner from "./Spinner";
import no_image from "../images/no-image.png";

export const ActorInfo = () => {
  const { actorDetails } = useContext(MovieContext);

  if (actorDetails) {
    return (
      <div className="container">
        <div className="actor-info">
          <div className="actor-info__img">
            <img style={{display:"block"}}
              className="responsive-img"
              src={
                actorDetails.profile_path
                  ? `${imgBaseUrl}${imgPoster}${actorDetails.profile_path}`
                  : no_image
              }
              alt={actorDetails.name}
            />
          </div>
          <div className="actor-info__content">
            <h1 style={{marginTop: 0}}>{actorDetails.name}</h1>

            <p>
              <span style={{ display: "block", fontWeight: 500 }}>
                Birthday
              </span>
              {actorDetails.birthday}
            </p>
            <p>
              <span style={{ display: "block", fontWeight: 500 }}>
                Place of Birth
              </span>
              {actorDetails.place_of_birth}
            </p>
            {actorDetails.deathday ? (
              <p>
                <span style={{ display: "block", fontWeight: 500 }}>
                  Deathday
                </span>
                {actorDetails.deathday}
              </p>
            ) : null}
            {actorDetails.homepage ? (
              <p>
                <span style={{ display: "block", fontWeight: 500 }}>
                Official Site
                </span>
                <a href={actorDetails.homepage} target="_blank" >Visit Site <i class="material-icons">link</i></a>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
