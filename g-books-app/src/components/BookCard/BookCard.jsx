import styles from "./BookCard.module.scss";
import exampleData from ".../test-data/fetchedDataExample.json";

const BookCard = ({ bookInfo }) => {
  console.log(bookInfo);

  //could destructure but want to only get specific data, also clearer to me what data I need
  const id = bookInfo.id;
  const selfLink = bookInfo.selfLink;
  const volumeInfo = bookInfo.volumeInfo;
  const title = bookInfo.title;
  const subtitle = bookInfo.subtitle;
  const fullTitle = `${title} : ${subtitle}`;
  const authors = bookInfo.authors; //array
  const publisher = bookInfo.publisher;
  const publishedDate = bookInfo.publishedDate;
  const description = bookInfo.description;
  const categories = bookInfo.categories; //array of related genre, topics
  const canonicalVolumelink = bookInfo.canonicalVolumeLink; //canonicalVolumeLink
  const webReaderLink = bookInfo.webReaderLink;
  const imageLink = bookInfo.imageLink; //imageLinks.thumbnail
  const language = bookInfo.language;

  return (
    <article
      className={styles.card}
      style={{ backgroundImage: `url(${imageLink})` }}
    >
      <div
        className={styles.bookCoverImg}
        style={{ backgroundImage: `url(${imageLink})` }}
      ></div>
      {/*Book Details*/}
      <div className={styles.details}>
        <h3>{fullTitle}</h3>
        <p>
          {authors} - {publishedDate} - {categories}
        </p>
        <p>Description: {description}</p>
        <a href={canonicalVolumelink}></a>
      </div>
    </article>
  );
};

export default BookCard;
