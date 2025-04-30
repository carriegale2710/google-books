import { useEffect, useState } from "react";
import { getBooksBySearchTerm } from '../services/book-services';


const BooksLoader = () => {
  return (
    <div>
      <p>BooksLoader</p>
      
    </div>
  )
}

export default BooksLoader


//hardest to test 


//a useEffect will be triggered whenever search value changes (unless null)
// useEffect(() => { 
//   if (searchValue === null) return; //initial value
//   setFetchStatus('Loading...');
//   getBooksBySearchTerm(searchValue)
//     .then()      
// })