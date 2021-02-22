import { useDispatch } from 'react-redux';
import { toggleRightPanel } from '../../../../../store';
import React from 'react';

const CloseButton = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(toggleRightPanel(false));
  };

  return (
    <button onClick={onClick} className="btn-close-right">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="feather feather-x-circle"
        viewBox="0 0 24 24"
      >
        <defs />
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9l-6 6M9 9l6 6" />
      </svg>
    </button>
  );
};

export default CloseButton;
