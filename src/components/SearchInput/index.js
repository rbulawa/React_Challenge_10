import React from 'react';

const SearchInput = ({ handleSearch }) => (
  <>
    <input
      onChange={handleSearch}
      placeholder="Search item..."
      className="input"
    />
  </>
);

export default SearchInput;
