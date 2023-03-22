import React from 'react';

const SortButtons = ({ handleSort }) => {
  return (
    <div className="sort-wrapper">
      <label>Sort Priority By:</label>
      <select className="my-select" onChange={(e) => handleSort(e)}>
        <option value="original">Original &#8886;</option>
        <option value="ascending">Ascending &#9650;</option>
        <option value="descending">Descending &#9660;</option>
      </select>
    </div>
  );
};

export default SortButtons;
