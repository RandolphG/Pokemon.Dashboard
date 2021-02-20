import React from 'react';
import { DownloadItemLine } from '../MainArea/DownloadItemLine';
import { useSelector } from 'react-redux';
import { details, getRightButtonState } from '../../../../store';
import ButtonCloseRight from './ButtonRightClose/ButtonRightClose';
import { Details } from './Details';

const RightArea = () => {
  const { name } = useSelector(details);

  const toggle = useSelector(getRightButtonState);

  console.log(`state of button`, toggle);
  const RightAreaHeaderWrapper = () => (
    <div className="right-area-header-wrapper">
      <p className="right-area-header">{name}</p>
      <button className="more-action" />
    </div>
  );

  return (
    <div className={`right-area ${toggle ? ` show` : null} `}>
      <ButtonCloseRight />
      <RightAreaHeaderWrapper />
      {/*<DownloadItemLine />*/}
      <Details />
    </div>
  );
};

export default RightArea;
