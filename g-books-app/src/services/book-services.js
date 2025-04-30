export const getBooksBySearchTerm = async (searchTerm) => {
  console.log(searchTerm);
  //user input validation
  if (searchTerm.trim() === "") throw new Error("Search term cannot be empty");

  //API call
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&=limit=10`;
  await fetch(apiUrl) // Make a GET request using the Fetch API
    .then((response) => {
      if (!response.ok) {
        //checking data was successfully fetched
        throw new Error(`Failed to fetch data`);
      } else if (response.totalItems === 0) {
        //checking empty results
        throw new Error(`No books matched your search query ${searchTerm}`);
      } else {
        console.log("Books Found:", data);
        // Process the retrieved user data
        const bookData = await response.json();
        console.log("Book Data:", bookData.items);
        const booksList = bookData.items.map((volume) => volume.volumeInfo);
        return booksList;
      }
    })
    .catch((error) => {
      //Catch and provide error messages
      console.error("Error:", error);
    });
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
"publisher": "\"O'Reilly Media, Inc.\"",
"publishedDate": "2020-04-21",
"description": "An understanding of psychology—specifically the psychology behind how users behave and interact with digital interfaces—is perhaps the single most valuable nondesign skill a designer can have. The most elegant design can fail if it forces users to conform to the design rather than working within the \"blueprint\" of how humans perceive and process the world around them. This practical guide explains how you can apply key principles in psychology to build products and experiences that are more intuitive and human-centered. Author Jon Yablonski deconstructs familiar apps and experiences to provide clear examples of how UX designers can build experiences that adapt to how users perceive and process digital interfaces. You’ll learn: How aesthetically pleasing design creates positive responses The principles from psychology most useful for designers How these psychology principles relate to UX heuristics Predictive models including Fitts’s law, Jakob’s law, and Hick’s law Ethical implications of using psychology in design A framework for applying these principles"
.
.
.
}
*/
