import React from 'react';


const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;

	return (
		<>
                {props.movies && props.movies.map((movie => (
                <div className="movie-container">
                    
                    <div className='image-container d-flex justify-content-start m-3'>
                        <img src={movie.Poster} alt='movie'></img>
                        {/* <div 
                            // adding function from props and adding onClick property
                            onClick={() => props.handleFavoritesClick(movie)}
                            className='overlay d-flex align-items-center justify-content-center'>
                            <FavoriteComponent/>
                        </div> */}
                    </div>

                    <div className="movie-info" key={movie.IMDBid}>
                        <center><p className="movie-title font-weight-bold">{movie.Title} ({movie.Year})</p></center>
                    </div>

                </div>
            )))}
		</>
	);
};

export default MovieList;