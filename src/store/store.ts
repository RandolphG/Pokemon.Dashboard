import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import { createEpicMiddleware } from "redux-observable";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { rootEpics }  from "./rootEpic";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();

const logger = createLogger({
  collapsed: true,
  level: "info",
  predicate: () => process.env.NODE_ENV === "development",
});

const middleware = applyMiddleware(epicMiddleware, thunk, logger);

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const store = createStore(rootReducer, composeEnhancer(middleware));

epicMiddleware.run(rootEpics);

export default store;
