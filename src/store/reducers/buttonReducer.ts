import { createReducer } from "@reduxjs/toolkit";
import { UPDATE_LEFT_PANEL, UPDATE_RIGHT_PANEL } from "../actions";

interface IButtons {
  rightPanelShow: boolean;
  leftPanelShow: boolean;
}

const buttonsState: IButtons = {
  rightPanelShow: false,
  leftPanelShow: false,
};

export const buttonsReducer = createReducer(buttonsState, {
  [UPDATE_RIGHT_PANEL]: (state, action) => ({
    ...state,
    rightPanelShow: action.payload,
  }),
  [UPDATE_LEFT_PANEL]: (state, action) => ({
    ...state,
    leftPanelShow: action.payload,
  }),
});
