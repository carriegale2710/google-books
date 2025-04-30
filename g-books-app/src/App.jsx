import { useState } from 'react';
import './App.module.scss';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import BooksList from './components/BooksList/BooksList';
import { getBooksBySearchTerm } from './services/book-services';


function App() {
  // const [searchTerm, setSearchTerm] = useState(null)
  
  
  return (
    <>
      <Header />
      <SearchBar/>
      <button onClick={() => getBooksBySearchTerm('ux+design')}>search</button>
        <section>
          <div><p id="loading-message" className='message hidden' >Loading...</p></div>
          <BooksList />
          <div><p></p></div>
        </section>
    </>
  )
}

export default App;


