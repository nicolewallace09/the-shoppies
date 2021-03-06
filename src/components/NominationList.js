import React from 'react';

const NominationList = (props) => {
    const FavoriteComponent = props.favoriteComponent;

	return (
		<>
               
                {/* {props.movies && props.movies.map((movie, index) => */}
                { props.movies.map((movie,index) => { 
                if (movie) {
                    return (
                        <div className="movie-container" key={movie.imdbID}>

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
                        )} return null
                })}
		</>
	);
};

export default NominationList;