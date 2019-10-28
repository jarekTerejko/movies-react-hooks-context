import React, { useContext } from "react";
import HeroImage from "./HeroImage";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import MovieCard from "./MovieCard";
import LoadMoreBtn from "./LoadMoreBtn";
import Spinner from "./Spinner";
import { MovieContext } from "../Contexts/MovieContext";
import { apiKey, apiUrl, imgBaseUrl, imgBig, imgPoster } from "../config";

const Home = () => {
  const { loading, currentPage, totalPages, movies, searchTerm } = useContext(MovieContext);

  console.log(currentPage, totalPages, movies);

    return (
      <div>
        <div>
          <HeroImage />
          <SearchBar />
        </div>

        <Grid 
        // header={searchTerm && !loading ? "Search Results" : "Pupular Movies"}
        header={"Movies"}
         />
        {loading ? <Spinner/> : null}
        <LoadMoreBtn/>
        {/* <LoadMoreBtn /> */}
        {/* <Spinner /> */}
      </div>
    );
  
};

export default Home;
