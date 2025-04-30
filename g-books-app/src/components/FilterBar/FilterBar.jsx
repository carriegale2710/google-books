import React from 'react';
import './FilterBar.modules.scss'

const FilterBar = () => {
  return (
    <div>
        <label defaultChecked={true}>
            <input type="radio" id="filterByAny" name="filter-tag" value="any"/>
            Any
        </label>
        <label>
            <input type="radio" id="filterByTitle" name="filter-tag" value="title"/>
            Title
        </label>
        <label>
            <input type="radio" id="filterByAuthor" name="filter-tag" value="author"/>
            Author
        </label>
        <label>
            <input type="radio" id="filterByYear" name="filter-tag" value="year"/>
            Year published
        </label>
    </div>
  )
}

export default FilterBar;
/*//FILTERING - uses radio inputs in form html 
// (filter by matching titles/author/year published with search bar input)

