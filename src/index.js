import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp';

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <Router>
      <App>
        <Route exact path="/" component={Welcome} />
        <Route path="/signup" component={SignUp} />
      </App>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
