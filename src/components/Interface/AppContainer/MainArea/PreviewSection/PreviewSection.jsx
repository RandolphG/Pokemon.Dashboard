import React from 'react';

const addressA =
  'https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80';

const addressB =
  'https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80';

const PreviewSection = () => {
  const ImageWrapper = () => (
    <a className="image-wrapper">
      <div className="image-overlay">
        <div className="video-info">
          <div className="video-info-text">
            <p className="video-name medium">Happiness & Tears</p>
            <p className="video-subtext medium">45.5 MB</p>
          </div>
          <button className="btn-play" />
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"
        alt={`alt-tag`}
      />
      <span className="video-time">10:32</span>
    </a>
  );
  const ImageWrapperSmall = address => {
    return (
      <a className="image-wrapper">
        <div className="image-overlay">
          <div className="video-info">
            <div className="video-info-text">
              <p className="video-name tiny">High Hopes</p>
              <p className="video-subtext tiny">50 MB</p>
            </div>
          </div>
        </div>
        <img src={address} alt={`alt-tags`} />
        <span className="video-time">02:35</span>
      </a>
    );
  };

  const SectionLeft = () => (
    <div className="section-part left">
      <ImageWrapper />
    </div>
  );

  const SectionRight = () => (
    <div className="section-part right">
      <div className="content-part-line">
        <ImageWrapperSmall address={addressA} />
        <ImageWrapperSmall address={addressB} />
      </div>
    </div>
  );

  return (
    <section className="content-section">
      <div className="section-header-wrapper">
        <h1 className="section-header">Preview</h1>
        <a className="section-header-link">View in folders</a>
      </div>
      <div className="content-section-line">
        <SectionLeft />
        <SectionRight />
      </div>
    </section>
  );
};

export default PreviewSection;
