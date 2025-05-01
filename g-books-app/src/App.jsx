import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BooksLoader from "./containers/BooksLoader";
import BooksList from "./components/BooksList/BooksList";
import BookCard from "./components/BookCard/BookCard";
import "./App.module.scss";

function App() {
  //getting searchterm string from user input state
  const [searchTerm, setSearchTerm] = useState("");
  console.log(
    `UserInput state variable(searchTerm) is currently: ${searchTerm}`
  );
  const [runningSearch, setRunningSearch] = useState(false);
  console.log(`Running Search: ${runningSearch}`);

  const onSubmit = (e) => {
    e.preventDefault();
    //user input validation
    if (searchTerm === "" || searchTerm.trim() === "") {
      throw new Error("empty input");
    }
    if (searchTerm === undefined) {
      throw new Error("input invalid");
    }
    setSearchTerm(e.target.value);
    console.log("you entered" + searchTerm);
    setRunningSearch(true);
    console.log("searching");
    return searchTerm;
  };

  //render component on page
  return (
    <>
      <Header />
      <SearchBar searchTerm={searchTerm} />
      <BooksLoader searchTerm={searchTerm} runningSearch={runningSearch} />
      <BooksList />
      <BookCard />
    </>
  );
}

export default App;
