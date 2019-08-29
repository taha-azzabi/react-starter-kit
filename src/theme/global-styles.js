import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans|Anton&display=swap');
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color:#003054;
    color:#fff
  }
  body {
    font-family: 'Alegreya Sans','Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

export default GlobalStyle;
// Use it as <GlobalStyle />
