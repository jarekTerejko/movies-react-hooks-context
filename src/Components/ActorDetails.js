import React, { useEffect, useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { apiKey, apiUrl, imgBaseUrl, imgBig, imgPoster } from "../config";
import Spinner from "./Spinner";
import { ActorMovies } from "./ActorMovies";
import { ActorInfo } from "./ActorInfo";

const ActorDetails = props => {
  console.log(props);

  const {
    actorDetails,
    getActorDetails,
    loading,
    getActorMovies,
    actorMovies
  } = useContext(MovieContext);

  useEffect(() => {
    const endpoint1 = `${apiUrl}person/${props.match.params.actorId}/movie_credits?api_key=${apiKey}`;

    const endpoint2 = `${apiUrl}person/${props.match.params.actorId}/?api_key=${apiKey}`;
    getActorMovies(endpoint1);
    getActorDetails(endpoint2);
  }, []);

  {
    console.log(actorDetails, actorMovies);
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
    {loading ? <Spinner/> : null}
      <ActorInfo />
      <ActorMovies />
    </>
  );
};

export default ActorDetails;
