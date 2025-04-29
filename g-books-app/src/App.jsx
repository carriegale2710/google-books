import { useState } from 'react'
import './App.scss'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Google Books Search</h1>
        <p>Search the world's most comprehensive index of full-text books.</p>
      </header>
      <section>
        <label htmlFor="search-bar">Enter Search</label>
        <input type="text" name='search-bar'placeholder='title/author/year'/>
        <button type='submit'>Search</button>
      </section>
    </>
  )
}

export default App
