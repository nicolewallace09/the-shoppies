import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from "./components/Nav.js";
import Search from "./components/Search.js";
import MovieList from "./components/MovieList.js";



function App() {
  const [movies, setMovies] = useState([]);

  // new state to hold favorites -- adding ser clicks to this array 
  const [favorites, setFavorites] = useState([]); 

  const [searchValue, setSearchValue] = useState('');

  // calling API -- searchValue as a parameter 
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=50241c2`; 
    
    const response = await fetch(url); 
    const responseJson = await response.json(); 

    if (responseJson.Search) {
      setMovies(responseJson.Search); 
    }
  };

  // passes new searchValue to our getMovieRequest
  useEffect(() => {
    getMovieRequest(searchValue); 
  }, [searchValue]); 

  // retrieving favorites from localStorage when app loads and setting to state 
  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem('react-movie-app-favorites')
    ); 
    setFavorites(movieFavorites); 
  }, []); 

  // saving to localStorage to remain when page loads 
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
  };

  // accepts a movie, takes in the current favorites array, copies it, and adds the new movie and saves back into state 
  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie]; 
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList); 
  };

  // remove a given movie from favorite state by filtering ID returning new favorites array
  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.id !== movie.id
    ); 
    setFavorites(newFavoriteList); 
    saveToLocalStorage(newFavoriteList); 
  };

  return (
    <>
    <Nav></Nav>
    
     <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <h1>Welcome to The Shoppies!</h1>
        </div>

        <div class="card col-lg-8 bg-white search-card">
          <p>Movie Title</p>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
      </div>

      <div class="row">
        <div class="card col-lg-4 bg-white movie-card">
          <p>Results for "{searchValue}"</p>
          <MovieList 
          movies={movies}/>
        </div>

        <div class="card col-lg-4 bg-white nom-card">
          <p>Nominations</p>
        </div>
      </div>

    </div>

    </>
  );
}

export default App;
