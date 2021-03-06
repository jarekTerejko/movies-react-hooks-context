import React, { useContext } from "react";
import { imgBaseUrl, imgBig } from "../config";
import { MovieContext } from "../Contexts/MovieContext";

const HeroImage = () => {
  const { popularMovie, searchTerm } = useContext(MovieContext);
  // console.log(popularMovie);

  return (
    <div>
      {popularMovie && !searchTerm ? (
        <div
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,.4) 20%, rgba(0,0,0,.9) 100%), url('${imgBaseUrl}${imgBig}${popularMovie.backdrop_path}')`,
            minHeight: "70vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            color: "#fff",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: "30px"
          }}
        >
          <div className="container">
            <h1>{popularMovie.original_title}</h1>
            <p>{popularMovie.overview}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HeroImage;
