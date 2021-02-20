import { combineEpics } from 'redux-observable';
import { initializeDataEpic, getDetailsEpic } from './initializeDataEpic';

const rootEpics = combineEpics(initializeDataEpic, getDetailsEpic);

export default rootEpics;
