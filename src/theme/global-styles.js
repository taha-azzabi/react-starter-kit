import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color:#003054
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

export default GlobalStyle;
// Use it as <GlobalStyle />
