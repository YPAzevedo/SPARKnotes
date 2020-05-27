import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    --webkit-font-smoothing: antialiased;
    background: '##fafafa'
  }
  body, input, button {
    font-size: 16px;
    font-family: Helvetica, sans-serif;
  }
  button {
    cursor: pointer;
  }
`;