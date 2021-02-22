import React from 'react';
import { useSelector } from 'react-redux';
import { details } from '../../../../../store';

const Header = () => {
  const { name } = useSelector(details);

  return (
    <div className="right-area-header">
      <p className="right-area-title">{name}</p>
      <button className="more-action" />
    </div>
  );
};
export default Header;
