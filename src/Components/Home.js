import React, { useContext, useEffect } from "react";
import HeroImage from "./HeroImage";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import MovieCard from "./MovieCard";
import LoadMoreBtn from "./LoadMoreBtn";
import Spinner from "./Spinner";
import { MovieContext } from "../Contexts/MovieContext";
import { apiKey, apiUrl, imgBaseUrl, imgBig, imgPoster } from "../config";

const Home = () => {
  const {
    loading,
    currentPage,
    totalPages,
    movies,
    searchTerm,
    getMovies
  } = useContext(MovieContext);

  console.log(currentPage, totalPages, movies);

  // useEffect(() => {
  //   // setLoading(true);
  //   const endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&page=1`;
  //   getMovies(endpoint)
  //   console.log("use effect hook");
  // }, []);

  if (movies) {
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
        {/* <Spinner/> */}
        {loading ? <Spinner /> : null}
        <LoadMoreBtn />
        {/* <LoadMoreBtn /> */}
        {/* <Spinner /> */}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default Home;
