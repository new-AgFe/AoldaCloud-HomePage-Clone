// src/styles/GlobalStyle.ts

import { createGlobalStyle, css } from 'styled-components';
import { tablet } from './mixins/mediaQueries';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }
  html, body, #root {
    &::-webkit-scrollbar {
      display: none; /* 스크롤바 자체를 안 보이게 만듭니다. */
    }
    -ms-overflow-style: none; 
    scrollbar-width: none;
    margin: 0 auto;
    padding: 0;
    
    min-height: 100vh;
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    padding-top: 5rem;
    
    ${tablet(css`
      padding-top: 3rem;
    `)}
  }
`;

export default GlobalStyle;