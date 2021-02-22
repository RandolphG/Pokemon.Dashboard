import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSprites } from '../../../../../store';
import { Description } from './Description';

const Details = () => {
  const images = useSelector(getSprites);
  const [loaded, setLoaded] = useState(false);

  const onLoaded = () => {
    setLoaded(true);
  };

  const Images = () => {
    return (
      <div className="received-files">
        <div className="image-wrapper">
          <img
            onLoad={onLoaded}
            style={{
              transition: loaded && '4s opacity ease-in-out',
              opacity: loaded ? 1 : 0,
            }}
            src={images && images.front_default}
            alt={images && images.front_default}
          />
        </div>
        <div className="image-wrapper">
          <img
            onLoad={onLoaded}
            style={{
              transition: loaded && '1s opacity ease-in-out',
              opacity: loaded ? 1 : 0,
            }}
            src={images && images.back_shiny}
            alt={images && images.back_shiny}
          />
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="received-item-line">
        <div className="received-items-content">
          <Images />
          <Description />
        </div>
      </div>
    </Fragment>
  );
};

export default Details;
