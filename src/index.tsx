import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { App } from './components/app/app';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Archivo';
    font-display: swap;
    src: local('Archivo-Regular'),
    url('../fonts/Archivo-Regular.woff2') format('woff2'),
    url('../fonts/Archivo-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Archivo';
    font-display: swap;
    src: local('Archivo-SemiBold'),
    url('../fonts/Archivo-SemiBold.woff2') format('woff2'),
    url('../fonts/Archivo-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'ArchivoBlack';
    font-display: swap;
    src: local('ArchivoBlack'),
    url('../fonts/ArchivoBlack-Regular.woff2') format('woff2'),
    url('../fonts/ArchivoBlack-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }


  img {
    max-width: 100%;
    height: auto;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #f3f3f3;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.querySelector(`#app`),
);
