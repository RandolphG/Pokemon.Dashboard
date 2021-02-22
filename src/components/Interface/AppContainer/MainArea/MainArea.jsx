import React, { useEffect } from 'react';
import { ButtonLeft, ButtonRight } from './Buttons';
import { SearchBar } from './SearchBar';
import { ListSection } from './ListSection';
import { FilterOptions } from './FilterOptions';
import { getPokemonDetailsRequest } from '../../../../store';
import { useDispatch } from 'react-redux';

const defaultSearch = `bulbasaur`;

const MainArea = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonDetailsRequest(defaultSearch));
  });

  return (
    <div className="main-area">
      <ButtonRight />
      <ButtonLeft />
      <SearchBar />
      <FilterOptions />
      <ListSection />
    </div>
  );
};

export default MainArea;
