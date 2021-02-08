import React from 'react';
import './SearchBar.css';

const SearchBar = ({ search }) => {

    const handleChange = (e) => {
        search(e.target.value.toLowerCase());
    }
    
    return (
        <div className="search_bar">
            <input type="text" onChange = { handleChange } placeholder="Search.." />
        </div>
    );
}

export default SearchBar;