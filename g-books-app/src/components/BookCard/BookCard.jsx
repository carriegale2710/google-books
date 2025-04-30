import { useState } from 'react';
import './BookCard.module.scss';

const BookCard = ({title,content}) => {
    const [contentVisible, setContentVisible] = useState(true);
  return (
    <article>
        <h2>{title}</h2>
        <button>
            {contentVisible ? "Hide" : "Show" } 
            Content
        </button>
      {contentVisible && <p>{content}</p> }
    </article>
  )
};

export default BookCard;
