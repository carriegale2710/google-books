import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Google Books Search</h1>
      </header>
      <section>
        <label htmlFor="search-bar">Search Books</label>
        <input type="text" name='search-bar'placeholder='Enter book title/author/year'/>
      </section>
    </>
  )
}

export default App
