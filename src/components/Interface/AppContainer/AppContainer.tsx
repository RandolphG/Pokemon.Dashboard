import React, { useEffect } from "react";
// import { LeftArea } from './LeftArea';
// import { RightArea } from "./RightArea";
import { MainArea } from "./MainArea";

import { useDispatch } from "react-redux";
import { getPokemonRequest } from "../../../store/actions";

const AppContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonRequest());
  }, []);

  return (
    <div className="app-container">
      {/*<LeftArea />*/}
      <MainArea />
      {/*<RightArea />*/}
    </div>
  );
};

export default AppContainer;
