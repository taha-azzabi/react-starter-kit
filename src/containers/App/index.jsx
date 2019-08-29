import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';

import theme from '../../theme';
import GlobalStyle from '../../theme/global-styles';
import { Container, Footer, Logo, NavBar } from '../../KitUi';
// import HomePage from '../HomePage';

const HomePage = React.lazy(() =>
  import(/* webpackChunkName: "HomePage" */ '../HomePage'),
);
const AboutPage = React.lazy(() =>
  import(/* webpackChunkName: "Comment" */ '../AboutPage'),
);
const NotFoundPage = React.lazy(() =>
  import(/* webpackChunkName: "NotFoundPage" */ '../NotFoundPage'),
);
// import NotFoundPage from '../NotFoundPage';
const Loading = () => <p>Loading</p>;
const App = () => (
  <ThemeProvider theme={theme}>
    <Container fluid className="root-app">
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kit de démarrage ReactJS</title>
        <meta
          name="description"
          content="Kit de démarrage ReactJS en utilisant les dernières technologie disponible et en mettant l'accent les meilleures pratiques."
        />
      </Helmet>
      <NavBar transparent expand="md">
        <Logo tag={Link} to="/" color="#c6a869" className="logo">
          Kit de démarrage ReactJS
        </Logo>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/a-props">à-propos</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </NavBar>
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route exact path="/" component={HomePage} />
          <Route path="/a-props" component={AboutPage} />
          <Route path="/404-not-found" component={NotFoundPage} />
        </Suspense>
        <Redirect to="/404-not-found" />
      </Switch>
      <Footer className="light" fixed>
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
  </ThemeProvider>
);

export default App;
