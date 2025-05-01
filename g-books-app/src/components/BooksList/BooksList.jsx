import "./BooksList.module.scss";
import BookCard from "../BookCard/BookCard";

const BooksList = (booksData) => {
  return (
    <>
      {booksData.map((book) => {
        return <BookCard bookInfo={book} />;
      })}
    </>
  );
};

export default BooksList;

/* load a grid of book results here - see book challenge lesson */
// just takes in a array  - easiest to test
