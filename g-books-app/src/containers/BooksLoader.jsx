import { useEffect, useState } from "react";
import BooksList from "../components/BooksList/BooksList";
import { getBooksBySearchTerm } from "../services/book-services";

const BooksLoader = ({ searchTerm }) => {
  const [booksList, setBooksList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");

  //will only fetch data if input is valid
  useEffect(() => {
    console.log("searchTerm is passed from App:" + searchTerm);
    //check input is valid first
    if (searchTerm === "" || searchTerm.trim() === "") {
      return;
    }
    if (searchTerm === undefined) {
      throw new Error("input invalid");
    }

    //once valid, start loading data
    setIsLoading(true);
    console.log(`Loading for input: ${searchTerm}`);

    //call API function
    getBooksBySearchTerm(searchTerm)
      .then((response) => {
        console.log("results recevied from book-services:" + response);

        const booksResults = response.items.map((volume) => volume.volumeInfo);
        console.log("Books found:", booksResults);

        setBooksList(booksResults);
        setIsLoading(false);
        console.log("BooksLoader - Loading complete");
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [searchTerm]);
  console.log(booksList);
  return <BooksList booksList={booksList} />; //return the data and send to BooksList component
};

export default BooksLoader;

//NOTE - this component is the hardest to test (due to data fetching - unpredictability)

//NOTE - About useEffect:
//a useEffect will be triggered whenever search value changes (unless null)
//   if (searchValue === null) return; //initial value
//   setFetchStatus('Loading...');
//   getBooksBySearchTerm(searchValue)
//     .then()
// }
