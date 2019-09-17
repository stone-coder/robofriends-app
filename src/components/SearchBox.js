import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="Enter Name Here"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;