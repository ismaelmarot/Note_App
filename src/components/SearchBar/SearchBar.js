import React from 'react';
import { MdSearch } from'react-icons/md';
import { SearchBarStyled } from './SearchBarStyled';
import { SearchBarInputStyled } from './SearchBarInputStyled';

const Search = ({ handleSearchNote }) =>{
    return(
        <SearchBarStyled className='search'>
            <MdSearch className='search-icon' />
            <SearchBarInputStyled
                onChange={(event) => handleSearchNote(event.target.value)}
                type='text' 
                placeholder='Type to search...' 
            />
        </SearchBarStyled>
    );
}

export default Search;
