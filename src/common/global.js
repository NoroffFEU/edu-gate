import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: ${({ theme  }) => theme.primaryBgColor };
    color: ${({ theme  }) => theme.primaryTextColor };
    display: flex;
    font-family: Lato, Helvetica, Arial, sans-serif, "Segoe UI Emoji";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  #root {
    width: 100%;
    height: 100vh;
    padding: 10px;
  }`;
