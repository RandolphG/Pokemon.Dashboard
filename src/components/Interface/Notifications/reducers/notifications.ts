import { createReducer } from "@reduxjs/toolkit";
import { ADD_NOTIFICATIONS, REMOVE_NOTIFICATIONS } from "../types";

/* notifications */
const initialState = {
  notifications: [0],
  error: null,
};

/* notification reducer */
export const notifications = createReducer(initialState, {
  [ADD_NOTIFICATIONS]: (state, notification) => {
    let newIndex = 0;
    newIndex++;
    return {
      ...state,
      notifications: [...notification, newIndex],
    };
  },
  [REMOVE_NOTIFICATIONS]: (state, { notification, item }) => {
    const newArr = [...notification];
    newArr.splice(
      newArr.findIndex(i => i === item),
      1
    );
    return {
      ...state,
      notifications: newArr,
    };
  },
});
