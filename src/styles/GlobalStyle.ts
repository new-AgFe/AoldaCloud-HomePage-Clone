// src/styles/GlobalStyle.ts

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* 1. 기본 마진/패딩 초기화 */
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    &::-webkit-scrollbar {
      display: none; /* 스크롤바 자체를 안 보이게 만듭니다. */
    }
    -ms-overflow-style: none; /* IE 및 Edge */
    scrollbar-width: none; /* Firefox */
    margin: 0 auto;
    padding: 0;
    /* (선택) 전체 화면 높이 설정 */
    min-height: 100vh;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden; /* 가로 스크롤 방지 */
    overflow-y: auto;
  }

  /* 2. 링크, 버튼 등 기본 스타일 초기화 (선택 사항) */
  a {
    text-decoration: none; /* 링크 밑줄 제거 */
    color: inherit; /* 부모 색상 상속 */
  }

  /* (선택 사항) Header 고정 시, body에 padding-top을 주어 콘텐츠가 Header 아래에 시작하도록 설정 */
  body {
    padding-top: 100px; // Header의 높이만큼 padding을 줍니다.
  }
`;

export default GlobalStyle;