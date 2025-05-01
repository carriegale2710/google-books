import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BooksLoader from "./containers/BooksLoader";
import BooksList from "./components/BooksList/BooksList";
import booksData from "./test-data/booksData.json";
import "./App.module.scss";

function App() {
  //I will keep track of two pieces of state:
  //1. the current input text
  const [inputText, setInputText] = useState("");
  //2. the final input text that will be submitted to the BooksLoader component to fetch API
  const [searchTerm, setSearchTerm] = useState("");

  //this will be passed as prop to my SearchBar to submit user input -> send to API
  const handleSubmit = (value) => {
    setSearchTerm(value);
    console.log(`searchTerm is ${searchTerm}`);
    // run the search - fetch data
    console.log(`Running Search of ${searchTerm}`);
  };

  //render components on page
  console.log("app renders");
  return (
    <>
      <Header />
      <SearchBar onSubmit={handleSubmit} />
      <BooksLoader searchTerm={searchTerm} />
      {/* <BooksList booksData={booksData} /> */}
    </>
  );
}

export default App;
