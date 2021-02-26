import { combineEpics } from "redux-observable";
import { initializeDataEpic, getDetailsEpic, getFetchDetailsEpic } from "./initializeDataEpic";

const root = combineEpics(initializeDataEpic, getDetailsEpic, getFetchDetailsEpic);

export default root;
