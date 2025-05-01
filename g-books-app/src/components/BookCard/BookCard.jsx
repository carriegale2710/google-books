import { useState } from "react";
import styles from "./BookCard.module.scss";

const BookCard = ({ bookInfo }) => {
  console.log(bookInfo);

  return (
    <article
      className={styles.card}
      style={{ backgroundImage: `url(${bookInfo.imageLink})` }}
    >
      {/* {bookInfo.rating === 5 && <Banner text="Top Rated" />} */}
      {/* {book.isOnSale === true && <Banner text="On sale" color="purple" />} */}
      {/* <div className={styles.blackUnderlay}></div> */}
      <div
        className={styles.bookCoverImg}
        style={{ backgroundImage: `url(${bookInfo.imageLink})` }}
      ></div>
      {/*Book Details*/}
      <div className={styles.details}>
        <h3>{bookInfo.title}</h3>
        <p>
          {bookInfo.author} - {bookInfo.year}
        </p>
        <p>Description: {bookInfo.description}</p>
      </div>
    </article>
  );
};

export default BookCard;
