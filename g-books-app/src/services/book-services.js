export const getBooksBySearchTerm = async (q) => {
    if (term.trim() === '') throw new Error('Search term cannot be empty');
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?${q}=search+terms`;
        
    )
}