import React from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import MovieContextProvider from './Contexts/MovieContext';

function App() {
  return (
    <>
    <MovieContextProvider>
    <Navbar/>
    <Home/>
    </MovieContextProvider>
    
    </>
    
  );
}

export default App;
