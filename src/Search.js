import React from 'react';

import './Search.css';

const Search = (props) => (
  <input
    type="search"
    className="search-box"
    placeholder={props.placeholder}
    onChange={props.onChange}
  />
);

export default Search;
