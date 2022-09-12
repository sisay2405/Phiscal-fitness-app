import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  width: 0px;
}
body {
    font-family: 'Josefin Sans';
    background-color: #FFFAFB;
  } 
`;

export default GlobalStyle;
