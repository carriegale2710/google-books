import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import BooksLoader from "./BooksLoader";

describe('BooksLoader', () => {
    //initial value is empty or null
    // it('Should show placeholder text in search bar when no text has been entered yet', () = {
    //     render(<BooksLoader searchValue = {null} />)
    //     //checking placeholder text is visible input text area
    // })
    it('Should Load books with correct searchterm value as ', () => {
        render(<BooksLoader searchValue = {'design'} />)
        //checking all objects in results array has 'design' as a substring of either the title, author values
    })
    it('Should render BooksList when there are results', () => {
        render(<BooksLoader searchValue = {'design'} />)
        //it loads a booksgrid/article elements for each book object in array
    })
    it('Should show and error message if no matching results/books are found', () => {
        //use spyOn on the booksServices function ?
    })
})






//NOTE - mock functions, APIs, spyOn
//what if our API breaks and we still want our tests to run ???
    // we can't pass things in from outside sources ???
    // can't just call vi.spyOn(getBooksBySearchTerm) 
    // import the whole file as bookServices from services/books-services.js


    //const spyOnGetBooks = vi.spyOn(bookServices, 'getBooksBySearchTerm')
    //stops API call from happening
    //spying lets us check searchterm has been called witht he right value -