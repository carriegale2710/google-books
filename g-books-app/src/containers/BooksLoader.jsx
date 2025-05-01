import { useEffect, useState } from "react";
import { getBooksBySearchTerm } from "../services/book-services";
import BooksList from "../components/BooksList/BooksList";

const BooksLoader = ({ searchTerm }) => {
  const [booksList, setBooksList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //check input is valid first
    if (searchTerm || searchTerm.trim() === "") {
    } else if (searchTerm === undefined) {
      return;
    }

    setIsLoading(true);
    console.log(`Loading for input: ${searchTerm}`);

    getBooksBySearchTerm(searchTerm)
      .then((booksList) => {
        setBooks(booksList);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    console.log("Loading complete");
  }, [searchTerm]);
};
export default BooksLoader;
// try {
//   // console.log(`Props passed to searchTerm: ${searchTerm}`);
//   //user input validation
//   if (searchTerm === "" || searchTerm.trim() === "") {
//     throw new Error("empty input");
//   }
//   if (searchTerm === undefined) {
//     throw new Error("input invalid");
//   }
//   const booksList = /*await*/ getBooksBySearchTerm(searchTerm); //-> calls fn in book-services with userinput as param
//   console.log(booksList);
//   return (
//     <>
//       <BooksList booksData={booksList} />
//     </>
//   );
// } catch (error) {
//   console.log(`Error: ${error}`);
// } finally {
//   console.log("resolved");
// }

//hardest to test

//a useEffect will be triggered whenever search value changes (unless null)
// useEffect(() => {
//   if (searchValue === null) return; //initial value
//   setFetchStatus('Loading...');
//   getBooksBySearchTerm(searchValue)
//     .then()
// }

//how is this component different from book-services tho>??
