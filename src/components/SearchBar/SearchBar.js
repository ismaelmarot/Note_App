import React from 'react';
import { MdSearch } from'react-icons/md';
import './SearchBar.css';

const Search = ({ handleSearchNote }) =>{
    return(
        <div className='search'>
            <MdSearch className='search-icon' />
            <input 
                onChange={(event) => handleSearchNote(event.target.value)}
                type='text' 
                placeholder='Type to search...' 
            />
        </div>
    );
}

export default Search;
