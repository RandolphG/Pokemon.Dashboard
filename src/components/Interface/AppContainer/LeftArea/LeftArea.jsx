import React from 'react';
import { SvgIcon } from './SvgIcon';
import { icons } from './SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getLeftButtonState, toggleLeftPanel } from '../../../../store';

const LeftArea = () => {
  const toggle = useSelector(getLeftButtonState);

  const CloseButton = () => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(toggleLeftPanel(false));

    return (
      <button onClick={onClick} className="btn-close-left">
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

  const ButtonLogout = () => (
    <button className="btn-logout">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="feather feather-log-out"
        viewBox="0 0 24 24"
      >
        <defs />
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
      </svg>
    </button>
  );

  const title = () => <div className="app-name">PokeDASH</div>;
  return (
    <div className={`left-area ${toggle ? `show` : ``}`}>
      <CloseButton />
      {title()}
      {icons.map(({ svg }, index) => (
        <SvgIcon key={index} svg={svg} />
      ))}
      <ButtonLogout />
    </div>
  );
};

export default LeftArea;
