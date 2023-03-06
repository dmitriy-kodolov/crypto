import { createGlobalStyle } from 'styled-components';
import Colors from './Colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Pretendard Variable;
    width: 100vw;
    height: 100vh;
    background-color: ${Colors.Black};
    margin: auto;
    font-size: 14px;
  }
`;

export default GlobalStyle;
