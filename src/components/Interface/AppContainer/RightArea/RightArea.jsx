import React from 'react';
import { useSelector } from 'react-redux';
import { getRightButtonState } from '../../../../store';
import { CloseButton } from './CloseButton';
import { Details } from './Details';
import { Header } from './Header';

const RightArea = () => {
  const toggle = useSelector(getRightButtonState);

  return (
    <div className={`right-area ${toggle ? ` show` : ``} `}>
      <div className={`pokemon-detail-container`}>
        <div className="elements">
          <CloseButton />
          <Header />
          <Details />
        </div>
      </div>
    </div>
  );
};

export default RightArea;
