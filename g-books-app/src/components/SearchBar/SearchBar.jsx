import { useState, useEffect } from "react";
import "./SearchBar.module.scss";
import { onSubmit } from "../../services/book-services";

const SearchBar = ({ searchTerm }) => {
  //only call API when submit button is clicked\

  return (
    <form>
      <label htmlFor="search-input">
        Search for:
        <input
          type="text"
          name="search-input"
          id="search-input"
          placeholder={`Enter search term`}
          value={searchTerm} //display value controlled by react state
          // onChange={(event) => setSearchTerm(event.target.value)} // when user types, update search term to new value
        />
      </label>
      <button onClick={onSubmit} type="submit" id="search-button">
        Search
      </button>
      <br />
    </form>
  );
};

export default SearchBar;

//send user selected options from the FilterBar to include into the returned formData
// -> passes filter tags along with the search term entered by user upon click submit button
// -> pass onto api to fetch (BooksLoader)
