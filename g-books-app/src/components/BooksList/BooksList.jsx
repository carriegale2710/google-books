import './BooksList.module.scss'
import data from '.../test-data/booksData.json'


const BooksList = () => {
  return (
    <div>
      <h5>Found {data.length} books</h5>
    </div>
  )
}

export default BooksList


/* load a grid of book results here - see album challenge lesson */
// just takes in a array  - easiest to test