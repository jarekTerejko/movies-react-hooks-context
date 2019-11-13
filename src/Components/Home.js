import React, { useContext } from "react";
import HeroImage from "./HeroImage";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import LoadMoreBtn from "./LoadMoreBtn";
// import Spinner from "./Spinner";
import { MovieContext } from "../Contexts/MovieContext";
import Spinner from "./Spinner";

const Home = () => {
  const { movies, loading, searchTerm } = useContext(MovieContext);

  if (movies) {
    return (
      <div>
        <div>
          <HeroImage />
          <SearchBar />
        </div>
        <Grid header={ searchTerm ? "Search Result" : "Movies"} />
        {loading ? <Spinner/> : null}
        { !loading ? <LoadMoreBtn /> : null}
      </div>
    );
  }
};

export default Home;
