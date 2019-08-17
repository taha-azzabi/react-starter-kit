import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/404-not-found" component={NotFoundPage} />
      <Redirect to="/404-not-found" />
    </Switch>
  </div>
);

export default App;
