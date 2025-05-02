import styles from "./BookCard.module.scss";

const BookCard = ({ bookInfo }) => {
  //could destructure but want to only get specific data, also clearer to me what data I need
  const title = bookInfo.title;
  console.log(title);
  console.log(bookInfo);
  const subtitle = bookInfo.subtitle;
  const fullTitle = `${title} : ${subtitle}`;

  const authors = bookInfo.authors; //array
  const publishedDate = bookInfo.publishedDate;
  const description = bookInfo.description;

  //extra info
  const categories = bookInfo.categories; //array of related genre, topics
  const canonicalVolumelink = bookInfo.canonicalVolumeLink; //canonicalVolumeLink
  // console.log(canonicalVolumelink);

  //checking image thumbnail existing
  // const imageLinks = bookInfo.imageLinks;

  //setting a default 'ImageNotFound' image to render just in case it is not found in bookInfo
  let imgLink =
    "https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg";

  try {
    imgLink = bookInfo.imageLinks.thumbnail;
    console.log(imgLink);
  } catch (e) {
    console.log("Error getting imgLink from bookInfo");
  }

  return (
    <article
      className={styles.card}
      style={{ backgroundImage: `url(${imgLink})` }}
    >
      <div
        className={styles.bookCoverImg}
        style={{ backgroundImage: `url(${imgLink})` }}
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
