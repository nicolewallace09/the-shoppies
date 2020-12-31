import React from 'react';

const Search = (props) => {
	return (
		<div className='col col-sm-12 form'>
			<input
                className='form-control'
                type="text"
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Search your nominations'
			></input>
		</div>
	
	);
};

export default Search;