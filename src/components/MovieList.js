import React from 'react';


const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;

	return (
		<>
               
                {props.movies && props.movies.map((movie, index) =>
                <div className="movie-container">
                    
                    <div className='image-container'>
                        <img src={movie.Poster} alt='movie' className="movie-poster"></img>
                    </div>

                    <div className="movie-info" key={movie.IMDBid}>
                        <p className="movie-title font-weight-bold">{movie.Title} ({movie.Year})</p>
                        <div 
                        // adding function from props and adding onClick property
                        onClick={() => props.handleFavoritesClick(movie)}
                        className='overlay d-flex'>
                        <FavoriteComponent/>
                    </div>
                    </div>

                </div>
            )}
		</>
	);
};

export default MovieList;