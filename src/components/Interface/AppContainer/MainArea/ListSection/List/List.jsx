import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredResults, getPokemonDetailsRequest } from '../../../../../../store';

const List = () => {
  const data = useSelector(getFilteredResults);
  const dispatch = useDispatch();

  const getDetails = name => {
    dispatch(getPokemonDetailsRequest(name));
  };

  const Header = () => (
    <div className="files-table-header">
      <div className="column-header table-cell">Name</div>
      <div className="column-header table-cell">Type</div>
      <div className="column-header table-cell">details</div>
    </div>
  );

  const Row = ({ name }) => (
    <div className="files-table-row">
      <div className="table-cell name-cell pdf">{name}</div>
      <div className="table-cell">place-holder</div>
      <div className="table-cell action-cell">
        <button className="more-action" onClick={() => getDetails(name)} />
      </div>
    </div>
  );

  return (
    <div className="files-table">
      <Header />
      {data.map(({ name }, index) => (
        <Row key={`files-row-${index}`} name={name} />
      ))}
    </div>
  );
};

export default List;
