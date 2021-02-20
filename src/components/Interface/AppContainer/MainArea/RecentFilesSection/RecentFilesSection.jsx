import React from 'react';
import { FilesTable } from './FilesTable';
import { useSelector } from 'react-redux';
import { getCount } from '../../../../../store';

const RecentFilesSection = () => {
  const resultsCount = useSelector(getCount);

  const SectionHeaderWrapper = () => (
    <div className="section-header-wrapper">
      <h1 className="section-header">Results : {resultsCount}</h1>
      <a className="section-header-link">View all files</a>
    </div>
  );

  return (
    <section className="content-section">
      <SectionHeaderWrapper />
      <FilesTable />
    </section>
  );
};

export default RecentFilesSection;
