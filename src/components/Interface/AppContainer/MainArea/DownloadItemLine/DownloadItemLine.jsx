import React from 'react';

const DownloadItemLine = () => {
  const downloadStatus = false;
  const status = true;
  const LineHeader = () => <div className="line-header">today</div>;

  const DownloadIcon = () => (
    <>
      {downloadStatus ? (
        <div className="download-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 512 512">
            <defs />
            <path d="M256 512C114.613 512 0 397.383 0 256S114.613 0 256 0s256 114.613 256 256c-.168 141.316-114.684 255.832-256 256zm0-480C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224c-.133-123.656-100.344-223.867-224-224zm0 0" />
            <path d="M208 368c-8.836 0-16-7.164-16-16V160c0-8.836 7.164-16 16-16s16 7.164 16 16v192c0 8.836-7.164 16-16 16zm0 0M304 368c-8.836 0-16-7.164-16-16V160c0-8.836 7.164-16 16-16s16 7.164 16 16v192c0 8.836-7.164 16-16 16zm0 0" />
          </svg>
        </div>
      ) : (
        <div className="download-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
            <defs />
            <path d="M403.939 295.749l-78.814 78.833V172.125c0-10.557-8.568-19.125-19.125-19.125s-19.125 8.568-19.125 19.125v202.457l-78.814-78.814c-7.478-7.478-19.584-7.478-27.043 0-7.478 7.478-7.478 19.584 0 27.042L289.208 431c4.59 4.59 10.863 6.005 16.812 4.953 5.929 1.052 12.221-.382 16.811-4.953l108.19-108.19c7.478-7.478 7.478-19.583 0-27.042-7.498-7.478-19.604-7.478-27.082-.019zM306 0C137.012 0 0 136.992 0 306s137.012 306 306 306 306-137.012 306-306S475.008 0 306 0zm0 573.75C158.125 573.75 38.25 453.875 38.25 306S158.125 38.25 306 38.25 573.75 158.125 573.75 306 453.875 573.75 306 573.75z" />
          </svg>
        </div>
      )}
    </>
  );

  const DownloadItemTexts = () => (
    <div className="download-item-texts">
      <p className="download-text-header">Glitter.mp4</p>
      {status ? (
        <div className="progress-bar">
          <span className="progress" />
        </div>
      ) : (
        <p className="download-text-info">
          34.45 MB<span>Waiting for download</span>
        </p>
      )}
    </div>
  );

  const DownloadItemIconA = () => (
    <div className="download-item-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="">
        <defs />
        <circle cx="256" cy="256" r="256" fill="#4b50dd" />
        <path
          fill="#f5f5f5"
          d="M192 64h176c4.4 0 8 3.6 8 8v328c0 4.4-3.6 8-8 8H120c-4.4 0-8-3.6-8-8V148l80-84z"
        />
        <path fill="#e6e6e6" d="M184 148c4.4 0 8-3.6 8-8V64l-80 84h72z" />
        <circle cx="352" cy="384" r="52" fill="#2179a6" />
        <g fill="#f5f5f5" className="g">
          <path d="M352 416c-2.208 0-4-1.788-4-4v-56c0-2.212 1.792-4 4-4s4 1.788 4 4v56c0 2.212-1.792 4-4 4z" />
          <path d="M352 416a3.989 3.989 0 01-2.828-1.172l-20-20c-1.564-1.564-1.564-4.092 0-5.656s4.092-1.564 5.656 0L352 406.344l17.172-17.172c1.564-1.564 4.092-1.564 5.656 0s1.564 4.092 0 5.656l-20 20A3.989 3.989 0 01352 416z" />
        </g>
      </svg>
    </div>
  );

  const DownloadItemIconB = () => (
    <div className="download-item-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="">
        <defs />
        <circle cx="256" cy="256" r="256" fill="#4bc0dd" />
        <path
          fill="#f5f5f5"
          d="M192 64h176c4.4 0 8 3.6 8 8v328c0 4.4-3.6 8-8 8H120c-4.4 0-8-3.6-8-8V148l80-84z"
        />
        <path fill="#e6e6e6" d="M184 148c4.4 0 8-3.6 8-8V64l-80 84h72z" />
        <circle cx="352" cy="384" r="52" fill="#2179a6" />
        <g fill="#f5f5f5" className="g">
          <path d="M352 416c-2.208 0-4-1.788-4-4v-56c0-2.212 1.792-4 4-4s4 1.788 4 4v56c0 2.212-1.792 4-4 4z" />
          <path d="M352 416a3.989 3.989 0 01-2.828-1.172l-20-20c-1.564-1.564-1.564-4.092 0-5.656s4.092-1.564 5.656 0L352 406.344l17.172-17.172c1.564-1.564 4.092-1.564 5.656 0s1.564 4.092 0 5.656l-20 20A3.989 3.989 0 01352 416z" />
        </g>
      </svg>
    </div>
  );

  return (
    <div className="download-item-line">
      <LineHeader />
      <div className="download-area">
        <DownloadItemIconA />
        <DownloadItemTexts />
        <DownloadIcon />
      </div>
    </div>
  );
};

export default DownloadItemLine;
