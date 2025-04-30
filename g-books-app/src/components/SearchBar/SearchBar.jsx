import React from 'react';
import FilterBar

const SearchBar = () => {
  return (
    <div>
        <label htmlFor="search-input">
          Search for:
          <input type="text" name='search-input' id="search-input"placeholder={`Type in /*get value of currentlyChecked radio input (title/author/year) from FilterBar*/`}/>
        </label>
        <button type='submit' id='search-button'>Search</button><br/>
    </div>
  )
}

export default SearchBar;
