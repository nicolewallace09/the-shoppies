import React from 'react';


const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;

	return (
		<>   
               {props.movies && props.movies.map((movie => (
           
                        <div className="movie-container" key={movie.imdbID}>
                            
                            <div className='image-container'>
                                <img src={movie.Poster} alt='movie' className="movie-poster"></img>
                            </div>

                            <div className="movie-info">
                                <p className="movie-card-title">{movie.Title} ({movie.Year})</p>
                                <div 
                                // adding function from props and adding onClick property
                                onClick={() => props.handleFavoritesClick(movie)}
                                className='overlay d-flex'>
                                <FavoriteComponent/>
                            </div>
                            </div>

                        </div>
               )))}
		</>
	);
};

export default MovieList;