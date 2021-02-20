import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResults } from '../../../../../../store';
import { getPokemonDetailsRequest } from '../../../../../../store/reducers/pokemon';

const FilesTable = () => {
  const data = useSelector(getResults);
  const dispatch = useDispatch();

  const getDetails = name => {
    dispatch(getPokemonDetailsRequest(name));
  };

  const FilesTableHeader = () => (
    <div className="files-table-header">
      <div className="column-header table-cell">Name</div>
      <div className="column-header table-cell size-cell">Size</div>
      <div className="column-header table-cell">Last Modified</div>
      <div className="column-header table-cell">Action</div>
    </div>
  );

  const FilesTableRow = ({ name }) => (
    <div className="files-table-row">
      <div className="table-cell name-cell pdf">{name}</div>
      <div className="table-cell">42 MB</div>
      <div className="table-cell">Aug 26, 2020</div>
      <div className="table-cell action-cell">
        <button className="more-action" onClick={() => getDetails(name)} />
      </div>
    </div>
  );

  return (
    <div className="files-table">
      <FilesTableHeader />
      {data.map(({ name }, index) => (
        <FilesTableRow key={`files-row-${index}`} name={name} />
      ))}
    </div>
  );
};

export default FilesTable;
