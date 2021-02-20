import React from 'react';
import { ButtonShowLeftArea } from './ButtonShowLeftArea';
import { MainAreaHeader } from './MainAreaHeader';
import { RecentFilesSection } from './RecentFilesSection';
import { ButtonShowRightArea } from './ButtonShowRightArea';

const MainArea = () => {
  return (
    <div className="main-area">
      <ButtonShowRightArea />
      <ButtonShowLeftArea />
      <MainAreaHeader />
      {/*<QuickAccessSection />*/}
      {/*<PreviewSection />*/}
      <RecentFilesSection />
    </div>
  );
};

export default MainArea;
