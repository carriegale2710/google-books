import "./SearchBar.module.scss";

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


//send user selected options from the FilterBar to include into the returned formData 
// -> passes filter tags along with the search term entered by user upon click submit button
// -> pass onto api to fetch (BooksLoader)