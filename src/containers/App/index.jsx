import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

const App = () => (
  <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kit de démarrage ReactJS</title>
      <meta
        name="description"
        content="Kit de démarrage ReactJS en utilisant les dernières technologie disponible et en mettant l'accent les meilleures pratiques."
      />
    </Helmet>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/404-not-found" component={NotFoundPage} />
      <Redirect to="/404-not-found" />
    </Switch>
  </div>
);

export default App;
