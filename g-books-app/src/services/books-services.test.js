
import { describe, it } from "vitest";


//NOTE
//remember that async functions return promises 
    // - you must wait for resolution to happen first



describe('getBooksBySearchTerm', () => {
    //dealing with async in tests
    
    it('Should throw error when fetch fails', {
        //is !response.ok?
    })
    
    it('Should throw error when no/empty results are returned'{
        //array is empty
    })
    
    //fetch is a function, but it exists on an object to , Window
    //we can spy on fetch and mock its resolve value - axios
    // we just care that ok is false
    it('Should ',  {
        // const spyFetch = vi.spyOn(window,'') 
        // spyFetch.mock
    })

    it('Should return an array when all good', async () => {
        const spyFetch = vi.spyOn(window,'fetch') 
        //results array tester
        //mock response from fetch is ok + has an array inside
    })
})