import React, { useState } from 'react';

const MainAreaHeader = () => {
  const [input, setInput] = useState('');

  const onChange = e => {
    e.preventDefault();
    setInput(e.target.value);
    console.log(`input`, input);
  };

  return (
    <div className="main-area-header">
      <div className="search-wrapper" id="searchLine">
        <input
          onChange={onChange}
          className="search-input"
          type="text"
          placeholder="e.g. files.doc"
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

export default MainAreaHeader;
