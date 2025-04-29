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
        <label htmlFor="search-bar">Search for:</label><br />
        <input type="text" name='search-bar' id="search-bar"placeholder='Type in title,author,year'/>
        <button type='submit' id='search-button'>Search</button>
        <div id='adv-filter'>
          <input type="radio" id="title" name="adv-filter" value="title"/>
          <label for="title">Title</label><br/>
          <input type="radio" id="author" name="adv-filter" value="author"/>
          <label for="author">Author</label><br/>
          <input type="radio" id="year" name="adv-filter" value="year"/>
          <label for="year">Year published</label><br/>
        </div>
      </form>
    </>
  )
}

export default App;

