import { useState, useEffect } from "react";
import "./SearchBar.module.scss";

const SearchBar = ({ onSubmit }) => {
  //this keeps track of live inputted text by user and updates for every letter
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  //this sets the final searchterm string used to call API
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputText); // SHOULD ONLY WORK ON SUBMIT (submit button pressed)
  };

  //this is the actual searchbar and submit button as a form
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-input">
        Search for:
        <input
          type="text"
          name="search-input"
          placeholder={`Enter search term`}
          value={inputText} //display value controlled by react  - what is currently inside the input text field
          onChange={handleChange} // when user types, update search term to new value
        />
      </label>
      <br />
      <button type="submit" id="search-button" alt-te>
        Search
      </button>
    </form>
  );
};

export default SearchBar;

//send user selected options from the FilterBar to include into the returned formData
// -> passes filter tags along with the search term entered by user upon click submit button
// -> pass onto api to fetch (BooksLoader)
