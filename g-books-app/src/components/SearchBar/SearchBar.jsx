import { getBooksBySearchTerm } from "../../services/book-services";
import "./SearchBar.module.scss";

const SearchBar = () => {
  //getting searchterm string from user input state
  const [searchTerm, setSearchTerm] = useState(""); //1.create state
  const handleClick = (e) => {
    setSearchTerm(e.target.value);
    try {
      getBooksBySearchTerm(searchTerm);
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  return (
    <div>
      <label htmlFor="search-input">
        Search for:
        <input
          type="text"
          name="search-input"
          id="search-input"
          placeholder={`Enter search term`}
        />
      </label>
      <button onClick={handleClick} type="submit" id="search-button">
        Search
      </button>
      <br />
    </div>
  );
};

export default SearchBar;

//send user selected options from the FilterBar to include into the returned formData
// -> passes filter tags along with the search term entered by user upon click submit button
// -> pass onto api to fetch (BooksLoader)
