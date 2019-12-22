import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { primaryBgColor, primaryTextColor } = theme

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
    background: ${primaryBgColor};
    color: ${primaryTextColor};
    display: flex;
    font-family: Lato, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  #root {
    width: 100%;
    height: 100vh;
    padding: 10px;
  }
  `;
  