import { useState } from 'react';
import './App.scss';
import FilterBar from './components/FilterBar/FilterBar';

function App() {
  //const [count, setCount] = useState(0)
  
  return (
    <>
      <header>
        <h1>Google Books</h1>
        <p>Search the world's most comprehensive index of full-text books.</p>
      </header>
      
      <form>

        <SearchBar />

        <FilterBar />

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


