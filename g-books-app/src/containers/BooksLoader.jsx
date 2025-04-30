import { useEffect, useState } from "react";
import { getBooksBySearchTerm } from "../services/book-services";

const BooksLoader = ({ userInput, filterTags }) => {
  console.log(userInput, filterTags);
  if (userInput === "") {
    return (
      <>
        <p>BooksLoader</p>
      </>
    );
  } else {
    const searchTerm = userInput;
    const bookList = getBooksBySearchTerm(searchTerm);
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
