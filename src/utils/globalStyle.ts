import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #fefefe;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    margin: 0;
    button {
      cursor: pointer;
      padding: 0.5rem 2rem;
      width: 150px;
    }
  }
`;

export default GlobalStyle;
