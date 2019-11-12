import React, { useContext } from "react";
import HeroImage from "./HeroImage";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import LoadMoreBtn from "./LoadMoreBtn";
// import Spinner from "./Spinner";
import { MovieContext } from "../Contexts/MovieContext";

const Home = () => {
  const { movies } = useContext(MovieContext);

  if (movies) {
    return (
      <div>
        <div>
          <HeroImage />
          <SearchBar />
        </div>
        <Grid header={"Movies"} />
        <LoadMoreBtn />
      </div>
    );
  }
};

export default Home;
