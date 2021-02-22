import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllResults, getCount, setSort, setSortReverse } from '../../../../../store';

const FilterOptions = () => {
  const resultsCount = useSelector(getCount);
  const dispatch = useDispatch();
  const image = false;

  const options = [
    {
      title: 'all',
      func: () => dispatch(getAllResults()),
    },
    {
      title: 'sort',
      func: () => {
        dispatch(setSort());
      },
    },
    {
      title: 'reverse',
      func: () => {
        dispatch(setSortReverse());
      },
    },
  ];

  const FilterButtons = ({ title, func }) => (
    <div onClick={func} className="access-link-wrapper">
      <div className="access-icon">
        {image ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-align-left"
          >
            <line x1="17" y1="10" x2="3" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="17" y1="18" x2="3" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-layers"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        )}
      </div>
      <span className="access-text">{title}</span>
    </div>
  );

  const Header = () => (
    <div className="section-header-wrapper">
      <h1 className="section-header">Results : {resultsCount}</h1>
      <a className="section-header-link">View all results</a>
    </div>
  );

  return (
    <section className="content-section">
      <h1 className="section-header">Filter Options</h1>

      <Header />

      <div className="access-links">
        {options.map(({ title, func }, i) => (
          <FilterButtons key={i} title={title} func={func} />
        ))}
      </div>
    </section>
  );
};

export default FilterOptions;
