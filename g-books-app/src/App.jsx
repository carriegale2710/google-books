import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BooksLoader from "./containers/BooksLoader";
import "./App.module.scss";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <BooksLoader userInput="design" filterTags={[]} />
    </>
  );
}

export default App;
