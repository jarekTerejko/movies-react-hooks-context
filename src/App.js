import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Movie from "./Components/Movie";
import ActorDetails from './Components/ActorDetails'
import MovieContextProvider from "./Contexts/MovieContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <MovieContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:movieId" component={Movie} />
            <Route exact path="/actor/:actorId" component={ActorDetails} />
            <Route component={NotFound} />
          </Switch>
        </MovieContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
