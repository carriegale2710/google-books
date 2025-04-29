import { useState } from 'react';
import './App.scss';

function App() {
  //const [count, setCount] = useState(0)
  
  return (
    <>
      <header>
        <h1>Google Books</h1>
        <p>Search the world's most comprehensive index of full-text books.</p>
      </header>
      
      <form>

        {/*//SEARCH BAR INPUT*/}
        <div> 
        <label htmlFor="search-input">
          Search for:
          <input type="text" name='search-input' id="search-input"placeholder={`Type in /*get value of currentlyChecked radio input (title/author/year)*/`}/>
        </label>
        <button type='submit' id='search-button'>Search</button><br/>
        </div>

        {/*//FILTERING - uses radio inputs in form html (filter by matching titles/author/year published with search bar input) */}
        <div id="adv-filter-wrapper">
          <label defaultChecked={true}>
            <input type="radio" id="filterByAny" name="adv-filter-select" value="any"/>
            Any
          </label>
          <label>
            <input type="radio" id="filterByTitle" name="adv-filter-select" value="title"/>
            Title
          </label>
          <label>
            <input type="radio" id="filterByAuthor" name="adv-filter-select" value="author"/>
            Author
          </label>
          <label>
            <input type="radio" id="filterByYear" name="adv-filter-select" value="year"/>
            Year published
          </label>
        </div>

      </form>

      <section>
        {/*//display loading message while waiting to fetch data (API)*/}
        <div><p id="loading-message" className='message' >Loading...</p></div>

        {/* load a grid of book results here - see album challenge lesson */}
      </section>
    </>
  )
}

export default App;


