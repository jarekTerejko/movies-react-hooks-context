import React, { useContext } from "react";
import { apiKey, apiUrl, imgBaseUrl, imgBig, imgPoster } from "../config";
import { MovieContext } from "../Contexts/MovieContext";

const HeroImage = props => {
  const { popularMovie } = useContext(MovieContext);
  console.log(popularMovie);

  return (
    <div>
      {popularMovie ? (
        <div
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,.3) 20%, rgba(0,0,0,.8) 100%), url('${imgBaseUrl}${imgBig}${popularMovie.backdrop_path}')`,
            minHeight: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            color: "#fff",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end"
          }}
        >
          <h1>{popularMovie.original_title}</h1>
          <p>{popularMovie.overview}</p>
        </div>
      ) : null}
    </div>
  );
};

export default HeroImage;

