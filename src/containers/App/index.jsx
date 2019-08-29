import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';

import theme from '../../theme';
import GlobalStyle from '../../theme/global-styles';
import { Container, Footer } from '../../KitUi';
// import HomePage from '../HomePage';

const HomePage = React.lazy(() =>
  import(/* webpackChunkName: "HomePage" */ '../HomePage'),
);
const Comment = React.lazy(() => import(/* webpackChunkName: "Comment" */ '../Comment'));
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
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Kit de démarrage ReactJS</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/comment/">comment</Link>
            </NavItem>
            <NavItem>
              <Link to="/404-not-found">404</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route exact path="/" component={HomePage} />
          <Route path="/comment" component={Comment} />
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
