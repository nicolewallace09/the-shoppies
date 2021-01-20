import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import React, { useState, useEffect } from 'react';
import Nav from "./components/Nav.js";
import Search from "./components/Search.js";
import MovieList from "./components/MovieList.js";
import AddNom from './components/AddNom.js';
import RemoveNom from "./components/RemoveNom.js"; 
import NominationList from "./components/NominationList.js";

function App() {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]); 
  const [searchValue, setSearchValue] = useState('');

  const getMovie = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=50241c2`; 
    
    const response = await fetch(url); 
    const responseJson = await response.json(); 

    if (responseJson.Search) {
      setMovies(responseJson.Search); 
    }
  };

  // passes new searchValue 
  useEffect(() => {
    getMovie(searchValue); 
  }, [searchValue]); 

  // retrieving favorites from localStorage when app loads and setting to state 
  useEffect(() => {
    const movieNominations = JSON.parse(
      localStorage.getItem('nominations')
    ); 

    if (movieNominations) {
      setNominations(movieNominations); 
    }
  }, []); 

  // saving to localStorage to remain when page loads 
  const saveToLocalStorage = (items) => {
    localStorage.setItem('nominations', JSON.stringify(items));
  };

  // accepts a movie, takes in the current favorites array, copies it, and adds the new movie and saves back into state 
  const addNominatedMovie = (movie) => {
    const newNominationList = [...nominations, movie]; 
    setNominations(newNominationList);
    saveToLocalStorage(newNominationList); 
  };

  // remove a given movie from favorite state by filtering ID returning new favorites array
  const removeNominatedMovie = (movie) => {
    const newNominationList = nominations.filter((nomination) => nomination.imdbID !== movie.imdbID); 
    setNominations(newNominationList); 
    saveToLocalStorage(newNominationList); 
  };

  if (nominations === 5) {
    console.log("hi")
  }

  return (
    <>
    <Nav></Nav>
    
     <div className="container">
        <div className="Title">
          <h1>Welcome to The Shoppies!</h1>
        </div>
       
        <div className="row">
          <div className="card col-12 bg-white">
            <p>Movie Title</p>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
        </div>

        <div className="row"> 
          <div className="card col-8 bg-white">  
            <div className="results-title">
              <p>Results for "{searchValue}"</p>
            </div>
        
            <div className="list-container"> 
                <div className="d-flex mt-4 mb-4 bg-white">
                  <MovieList 
                  movies={movies}
                  key={movies.imdbID}
                  favoriteComponent={AddNom} 
                  handleFavoritesClick={addNominatedMovie}
                  />
                </div>
            </div>
          </div>
       
          <div className="card col-4 bg-white nom-card">
            <p>Nominations</p>
            <center>Choose up to 5 nominations!</center>
            <NominationList 
            movies={nominations} 
            key={nominations.imdbID}
            favoriteComponent={RemoveNom} 
            handleFavoritesClick={removeNominatedMovie}
            /> 
          </div>
        </div>
    </div>


    </>
  );
}

export default App;
