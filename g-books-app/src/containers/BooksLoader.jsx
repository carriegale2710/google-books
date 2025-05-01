import { useEffect, useState } from "react";
import { getBooksBySearchTerm } from "../services/book-services";

const BooksLoader = ({ searchTerm, runningSearch }) => {
  if (searchTerm != "" && runningSearch == true) {
    // console.log(`Props passed to searchTerm: ${searchTerm}`);
    const bookList = getBooksBySearchTerm(searchTerm); //-> calls fn in book-services with userinput as param
    console.log(bookList);
    return (
      <>
        <p id="loading-message" className="message hidden">
          Found {`${bookList}`}
        </p>
      </>
    );
  }
};

export default BooksLoader;

//hardest to test

//a useEffect will be triggered whenever search value changes (unless null)
// useEffect(() => {
//   if (searchValue === null) return; //initial value
//   setFetchStatus('Loading...');
//   getBooksBySearchTerm(searchValue)
//     .then()
// }

//how is this component different from book-services tho>??
