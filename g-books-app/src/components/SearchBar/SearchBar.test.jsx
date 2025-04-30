import {describe} from 'vitest';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';



describe('SearchBar', () => {
    //all we care is that the function is called- testing execution not implementation
    it('Should call the function passed into it when search button is clicked', () => {

    });
    
    it('Should call the function passed into it with the value typed into the text field'){
        const user = userEvent.setup()
        const fakeSearch = visualViewport.fn(()=> {});
        render(<SearchBar />)
    }
    
});






//NOTE
//unless empty, whatever function goes into search bar, we want it to be called
    //we care about which function is passed into this component
    //vitest and jest give us the abiility to mock/fake some control data
        // we can do the same with functions - make mock functions
        // eg. jest.fn(//put fake function here?) - jest syntax
        // vitest syntax: vi.fn()
    
    