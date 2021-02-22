import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchInput, setSearchInput } from '../../../../../store';

const SearchBar = () => {
  const searchInput = useSelector(getSearchInput);
  const dispatch = useDispatch();

  const onChange = e => {
    e.preventDefault();
    dispatch(setSearchInput(e.target.value));
  };

  return (
    <div className="main-area-header">
      <div className="search-wrapper" id="searchLine">
        <input
          value={searchInput}
          onChange={e => onChange(e)}
          className="search-input"
          type="text"
          placeholder="e.g. pickachu"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="feather feather-search"
          viewBox="0 0 24 24"
        >
          <defs />
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
