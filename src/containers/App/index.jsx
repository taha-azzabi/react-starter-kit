import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
} from 'reactstrap';
import theme from '../../theme';
import GlobalStyle from '../../theme/global-styles';
import { Container, Footer } from '../../KitUi';
import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

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
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
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
  </ThemeProvider>
);

export default App;
