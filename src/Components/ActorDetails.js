import React, { useEffect, useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { apiKey, apiUrl } from "../config";
import Spinner from "./Spinner";
import ActorMovies from "./ActorMovies";
import ActorInfo from "./ActorInfo";

const ActorDetails = props => {
  // console.log(props);

  const { getActorDetails, loading, getActorMovies } = useContext(MovieContext);

  useEffect(() => {
    const endpoint1 = `${apiUrl}person/${props.match.params.actorId}/movie_credits?api_key=${apiKey}`;

    const endpoint2 = `${apiUrl}person/${props.match.params.actorId}/?api_key=${apiKey}`;
    getActorMovies(endpoint1);
    getActorDetails(endpoint2);
  }, []);

  // if (loading) {
  //   return <Spinner />;
  // }


    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
          <ActorInfo />
          <ActorMovies />
        </>
      );
    }
  }


export default ActorDetails;
