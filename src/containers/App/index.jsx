import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

const App = () => (
  <Container fluid className="root-app">
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
    <Footer className="light">
      <Container>
        <p className="copyright">
          <span>Kit de démarrage ReactJS ©2019</span>
          <span>|</span>
          <a href="https://www.datarox.fr/" title="Datarox">
            Datarox
          </a>
        </p>
      </Container>
    </Footer>
  </Container>
);

export default App;
