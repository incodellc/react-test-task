import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import App from '../components/App';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Route path="/">
            <App />
          </Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
