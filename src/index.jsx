import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import store, { history } from './store/store';
import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary, Interface } from './components';

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Router history={history}>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route key={`interface`} exact path={`/`} render={() => <Interface />} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);
