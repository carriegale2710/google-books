import { useState } from "react";
import { getBooksBySearchTerm } from "../../services/book-services";
import "./SearchBar.module.scss";

const SearchBar = () => {
  //getting searchterm string from user input state
  //create state, starts as empty string
  const [searchTerm, setSearchTerm] = useState("");
  //only call API when button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(getBooksBySearchTerm(searchTerm));
    } catch (error) {
      console.log("Error: " + error);
    } finally {
      //reset form
    }
  };
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
          onChange={(event) => setSearchTerm(event.target.value)} // when user types, update search term to new value
        />
      </label>
      <button onClick={handleSubmit} type="submit" id="search-button">
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
