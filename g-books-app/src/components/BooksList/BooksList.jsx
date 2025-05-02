import "./BooksList.module.scss";
import BookCard from "../BookCard/BookCard";

const BooksList = ({ booksList }) => {
  console.log("booksList passed from BooksLoader:", booksList);
  // const totalItems = booksData.totalItems;
  // const booksListArr = booksData.items;
  // console.log(booksListArr);

  return (
    <>
      <section className="booksGrid">
        {booksList.map((book) => {
          console.log(`Loading ${book.title}`);
          return <BookCard key={book.id} bookInfo={book} />;
        })}
      </section>
    </>
  );
};

export default BooksList;

/* load a grid of book results here - see book challenge lesson */
// just takes in a array  - easiest to test
