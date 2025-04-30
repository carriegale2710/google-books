import { useState } from 'react';
import './App.module.scss';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import BooksList from './components/BooksList/BooksList';


function App() {
  //const [count, setCount] = useState(0)
  
  return (
    <>
    <Header />
    <SearchBar/>
      <section>
        <div><p id="loading-message" className='message hidden' >Loading...</p></div>
        <BooksList />
      </section>
    </>
  )
}

export default App;


