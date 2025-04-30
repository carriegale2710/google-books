export const getBooksBySearchTerm = async (searchTerm) => {
    
    //user input validation 
    if (searchTerm.trim() === '') throw new Error('Search term cannot be empty');

    //fetch is a function, but it exists on an object to , Window
    
    
    //API call
    const response = await fetch(
        const terms = searchTerm.trim().join('+')
        //console.log(terms);
        
        `https://www.googleapis.com/books/v1/volumes?q=${terms}`,
        //eg. https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes
        //< also add filter params from filter bar if not 'any'
        //also at a limit for results number? limit to 10, 20 per page? 
    );
    
    
    
    //checking data was successfully fetched
    if(!repsonse.ok){
        throw new Error(`Failed to fetch data`);
    };
    
    //checking empty results
    if(repsonse.totalItems === 0){ 
        throw new Error(`No books matched your search query for + ${searchTerm}`)
    };
    
    //extract results
    //remember that async functions return promises - you must wait for resolution 
    const data = response.json(); //Parsing into json array
    const results = response.items.volumeInfo //array of volume items (books-info)
    const firstFiveResults = results.slice(1,4);
    console.log(firstFiveResults)
};




//Example data - volume object data 
//fetching from https://www.googleapis.com/books/v1/volumes?q=ux+design
//first 'Volume' object in array results:

/*
First Result for searchTerm = 'ux design'

results = response.items.volumeInfo = {
    "title": "Laws of UX",
    "subtitle": "Using Psychology to Design Better Products & Services",
    "authors": [
        "Jon Yablonski"
    ],
    "publisher": "\"O'Reilly Media, Inc.\"",
    "publishedDate": "2020-04-21",
    "description": "An understanding of psychology—specifically the psychology behind how users behave and interact with digital interfaces—is perhaps the single most valuable nondesign skill a designer can have. The most elegant design can fail if it forces users to conform to the design rather than working within the \"blueprint\" of how humans perceive and process the world around them. This practical guide explains how you can apply key principles in psychology to build products and experiences that are more intuitive and human-centered. Author Jon Yablonski deconstructs familiar apps and experiences to provide clear examples of how UX designers can build experiences that adapt to how users perceive and process digital interfaces. You’ll learn: How aesthetically pleasing design creates positive responses The principles from psychology most useful for designers How these psychology principles relate to UX heuristics Predictive models including Fitts’s law, Jakob’s law, and Hick’s law Ethical implications of using psychology in design A framework for applying these principles"
}
*/