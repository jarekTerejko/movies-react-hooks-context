import React, { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { imgBaseUrl, imgPoster } from "../config";
import no_image from "../images/no-image.png";

const ActorInfo = () => {
  const { actorDetails } = useContext(MovieContext);

  if (actorDetails) {
    return (
      <div className="container">
        <div className="actor-info">
          <div className="actor-info__img">
            <img
              style={{ display: "block" }}
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
            <ul className="collection with-header">
              <li className="collection-header">
                <h3 style={{ marginTop: 0 }}>{actorDetails.name}</h3>
              </li>
              <li className="collection-item">
                <span style={{ display: "block", fontWeight: 500 }}>
                  Birthday
                </span>
                {actorDetails.birthday}
              </li>
              <li className="collection-item">
                <span style={{ display: "block", fontWeight: 500 }}>
                  Place of Birth
                </span>
                {actorDetails.place_of_birth}
              </li>
              {actorDetails.deathday ? (
                <li className="collection-item">
                  <span style={{ display: "block", fontWeight: 500 }}>
                    Deathday
                  </span>
                  {actorDetails.deathday}
                </li>
              ) : null}
              {actorDetails.homepage ? (
                <li className="collection-item">
                  <span style={{ display: "block", fontWeight: 500 }}>
                    Official Site
                  </span>
                  <a
                    href={actorDetails.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site <i className="material-icons">link</i>
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ActorInfo;
