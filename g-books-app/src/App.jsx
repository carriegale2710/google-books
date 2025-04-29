import { useState } from 'react'
import './App.scss'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Google Books</h1>
        <p>Search the world's most comprehensive index of full-text books.</p>
      </header>
      <form>
        <>
          <label htmlFor="search-bar">Enter text</label><br />
          <input type="text" name='search-bar'placeholder='Type in title,author,year'/>
        </>
        <button type='submit'>Search</button>
      </form>
    </>
  )
}

export default App
