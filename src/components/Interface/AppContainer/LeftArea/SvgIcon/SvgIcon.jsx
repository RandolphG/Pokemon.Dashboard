import React from 'react';

const SvgIcon = ({ svg }) => {
  const isActive = false;
  const nothing = ``;
  return (
    <a href="#" className={`item-link ${isActive ? `active` : nothing}`} id="pageLink">
      {svg}
    </a>
  );
};
export default SvgIcon;
