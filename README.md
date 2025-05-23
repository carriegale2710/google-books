# Google Books API Project - Carrie

## Project Links

- Github: https://github.com/carriegale2710/google-books/tree/main
- Nology Project Brief: https://github.com/nology-tech/chicago-consultancy/blob/main/projects/google-books/README.md
- Trello Board: https://trello.com/b/F0uJrWLM/google-books-api-friday-2nd-may

## Google Books:

- API: https://developers.google.com/books/docs/v1/getting_started
- UI Layout:
  - Search Page: https://books.google.com/
  - [Advanced Search](https://books.google.com/advanced_book_search?udm=36&q=don+norman)
  - Results Page: https://www.google.com/search?udm=36&q=Don+Norman

## Useful Resources:

- [Using Working Volumes](https://developers.google.com/books/docs/v1/using#WorkingVolumes)
- [Using Async Await](https://dmitripavlutin.com/javascript-fetch-async-await/)
- [Using Postman to Test APIs](https://www.blazemeter.com/blog/how-use-postman-test-apis)
- [Containers vs Components](https://www.cronj.com/blog/difference-container-component-react-js/)

### Styling:

- [Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
- [Media Queries](https://medium.com/geekculture/everything-about-css-media-queries-3e9786294b81)
- [Radio Group](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/radio)

# Google Books API Search Engine - Outline

This project will require you to use React and Asynchronous programming.

## MVP

Create a page that allows users to search for books. The aim is for the user to be able to search for a book inside the Google Books database and to be able to get more details about a certain title.

Page should include the following:

- [x] Header section introducing the page
- [x] Form containing a text input and a submit / search button
- [x] A grid of books

Instructions:

- [x] When the submit button is clicked you need the request books from the Google books API using the input value as your query string
- [x] The books that you receive should be rendered in the books grid.
- [x] Each book in the grid should have an image, author, title and (optional) description (abridged)
- [x] The grid should be responsive on different screen sizes

Styling (required):

- [x] This application should look good, take some time to pick a palette and plan out your design - this will also help with splitting the app into React components. You can use tools like Figma or wireframe pro to plan what your application is going to look like.
- [x] Use modules for styling, don't forget about other SCSS features, like a separate file for palette or variables.

Application Design (required):

- [x] Remember that some JavaScript logic, like functions that fetch data, can be moved to their own .js files
- [x] Always use iterators over loops
- [x] Always parametrize and abstract large pieces of duplicate code.

Bonus (optional, but highly recommended):

- [ ] Give feedback to the user when no book results can be found for the query.
- [ ] When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.
