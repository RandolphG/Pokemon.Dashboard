import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleRightPanel } from '../../../../../../store';

const ButtonRight = () => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(toggleRightPanel(true));

  return (
    <button className="btn-show-right-area" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-left"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
  );
};

export default ButtonRight;
