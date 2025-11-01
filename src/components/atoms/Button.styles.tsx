// src/components/atoms/Button.styles.tsx

import styled, { css } from 'styled-components';
import { type ButtonTheme } from './Button';

// 1. Props에 따라 동적으로 변할 수 있는 스타일을 위한 인터페이스 정의
interface StyledButtonProps {
  $theme: ButtonTheme;
}

// 2. 테마별 스타일 속성을 담는 Map 객체 정의
const themeStyles = {
  primary: css`
    background-color: #007bff; /* 파란색 */
    color: white;
    border: 1px solid #007bff;
    &:hover { background-color: #0056b3; border-color: #0056b3; }
  `,
  
  // 2. 보조 행동: 회색 배경
  secondary: css`
    background-color: #6c757d; /* 회색 */
    color: white;
    border: 1px solid #6c757d;
    &:hover { background-color: #5a6268; border-color: #5a6268; }
  `,
  
  // 3. 투명 행동: 배경 없음, 텍스트 색상만 지정
  ghost: css`
    background-color: transparent;
    color: #333; /* 어두운 텍스트 색상 */
    border: 1px solid transparent; /* 호버 시 튀어나가지 않도록 투명 보더 유지 */
    &:hover { background-color: rgba(0, 0, 0, 0.05); } /* 아주 연한 회색으로 호버 효과 */
  `,
};

// 2. HTML 태그(button)를 감싸 스타일링된 컴포넌트 생성
export const StyledButton = styled.button<StyledButtonProps>`
  // /* 기본 스타일 */
  // padding: 10px 20px;
  // border: none;
  // border-radius: 1rem;
  // font-size: 16px;
  // cursor: pointer;

  // transition: transform 0.3s ease-in-out, background-color 0.2s ease;
  
  // &:hover {
  //   /* 배경색 변경은 기존 테마 스타일에서 처리됨 */
    
  //   /* 3. 살짝 확대 */
  //   transform: scale(1.05); 
    
  //   /* z-index를 높여서 다른 요소 위에 떠오르는 느낌 강조 */
  //   z-index: 10; 
  // }

  ${(props) => themeStyles[props.$theme]}

`;