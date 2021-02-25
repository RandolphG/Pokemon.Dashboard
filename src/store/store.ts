import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import { createEpicMiddleware } from "redux-observable";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { root } from "./rootEpic";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();

const logger = createLogger({
  collapsed: true,
  level: "info",
  predicate: () => process.env.NODE_ENV === "development",
});

const middleware = applyMiddleware(epicMiddleware, thunk, logger);

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

console.log(``)
const store = createStore(rootReducer, composeEnhancer(middleware));

epicMiddleware.run(root);

export default store;
