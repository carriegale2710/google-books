export const getBooksBySearchTerm = async (searchTerm) => {
  console.log("book-service.js is called by BooksLoader");
  //props
  console.log(`Props passed to book-services.js: searchTerm: ${searchTerm}`);

  //userinput as param
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&=limit=20`;

  //API call
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const booksData = await response.json();
    return booksData;
  } catch (error) {
    console.error("Error:", error);
  }
};

/* NOTE :

Example data - volume object data 
- fetching from https://www.googleapis.com/books/v1/volumes?q=ux+design
- first 'Volume' object in array results:

Example Result for searchTerm = 'ux+design'

results = response.items.volumeInfo = {
"title": "Laws of UX",
"subtitle": "Using Psychology to Design Better Products & Services",
"authors": [
    "Jon Yablonski"
],
"description": "An understanding of psychology—specifically the psychology behind how users behave and interact with digital interfaces—is perhaps the single most valuable nondesign skill a designer can have. The most elegant design can fail if it forces users to conform to the design rather than working within the \"blueprint\" of how humans perceive and process the world around them. This practical guide explains how you can apply key principles in psychology to build products and experiences that are more intuitive and human-centered. Author Jon Yablonski deconstructs familiar apps and experiences to provide clear examples of how UX designers can build experiences that adapt to how users perceive and process digital interfaces. You’ll learn: How aesthetically pleasing design creates positive responses The principles from psychology most useful for designers How these psychology principles relate to UX heuristics Predictive models including Fitts’s law, Jakob’s law, and Hick’s law Ethical implications of using psychology in design A framework for applying these principles"


"publisher": "\"O'Reilly Media, Inc.\"",
"publishedDate": "2020-04-21",
.
.
.
}
*/
