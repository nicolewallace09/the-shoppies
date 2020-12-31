import React from 'react';
import 'materialize-css';
import { TextInput } from 'react-materialize';

const Search = (props) => {
	return (
		<div className='col col-sm-8 form'>
			<TextInput
                id="TextInput-4"
                className='form-control'
                type="text"
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Search your nominations'
			/>
		</div>
	
	);
};

export default Search;