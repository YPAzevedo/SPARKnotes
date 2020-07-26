import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100vh;
    width: 100%;
  }
  body {
    --webkit-font-smoothing: antialiased;
    background: '#eeeeee'
  }
  body, input, button {
    font-size: 16px;
    font-family: Helvetica, sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
