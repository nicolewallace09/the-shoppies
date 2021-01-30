import React, { useState, useEffect } from 'react';
import Nav from "../components/Nav.js";
import Search from "../components/Search.js";
import MovieList from "../components/MovieList.js";
import AddNom from '../components/AddNom.js';
import RemoveNom from "../components/RemoveNom.js"; 
import NominationList from "../components/NominationList.js";
import { Row, Card, Col} from 'react-materialize'; 

function Homepage() {
    const [movies, setMovies] = useState([]);
    const [nominations, setNominations] = useState([]); 
    const [searchValue, setSearchValue] = useState('');
  
    const getMovie = async (searchValue) => {
      const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=50241c2`; 
      
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
            Welcome to The Shoppies!<img src="https://img.icons8.com/cotton/64/000000/the-oscars--v1.png" alt="award-icon"/><br></br>
            <span className="subtitle">Movie awards for entrepreneurs</span>
          </div>
         
          <Row>
            <Col xl={12} xs={12} >
              <Card>
                <p className="movie-title">Movie Title</p>
                <Search className="justify-content-center" searchValue={searchValue} setSearchValue={setSearchValue} />
              </Card>
            </Col>
          </Row>
  
          <Row>
            <Col xl={9} xs={12} > 
              <Card className="movie-card">
                <div className="results-title">
                  <p className="search-title">{movies.length ? `Viewing ${movies.length} results for "${searchValue}"` : "Please search a movie to view results!" }</p>
                </div>
            
                <div className="list-container"> 
                    <div className="d-flex mt-3 mb-2 bg-white">
                      <MovieList 
                      movies={movies}
                      key={movies.imdbID}
                      favoriteComponent={AddNom} 
                      handleFavoritesClick={addNominatedMovie}
                      />
                    </div>
                </div>
              </Card>
            </Col>
          
         
            <Col xl={3} xs={12} > 
              <Card className="nom-card">
                <p className="nom-title">Your Nominations List</p><br></br>
                <p>Add to this list by pressing the nominate button under a movie</p>
                <NominationList 
                movies={nominations} 
                key={nominations.imdbID}
                favoriteComponent={RemoveNom} 
                handleFavoritesClick={removeNominatedMovie}
                /> 
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
  
  export default Homepage;