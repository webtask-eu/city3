import React from 'react';

const SortDropdown = ({ onSortChange }) => {
  const handleSortChange = event => {
    const value = event.target.value;
    onSortChange(value);
  };

  return (
    <div className="form-group">
      <label htmlFor="sort-dropdown">Sort by:</label>
      <select
        className="form-control"
        id="sort-dropdown"
        onChange={handleSortChange}
      >
        <option value="name">Name</option>
        <option value="population">Population</option>
      </select>
    </div>
  );
};

export default SortDropdown;
