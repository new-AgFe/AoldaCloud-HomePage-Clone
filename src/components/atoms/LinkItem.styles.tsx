// src/components/atoms/LinkItem.styles.tsx

import styled, { css } from 'styled-components';
import { type LinkTheme } from './LinkItem';

// 1. Props에 따라 동적으로 변할 수 있는 스타일을 위한 인터페이스 정의
interface StyledLinkItemProps {
  $theme: LinkTheme;
  $disabled?: boolean;
  to: string;
}

// 2. 테마별 스타일 속성을 담는 Map 객체 정의
const themeStyles = {
  primary: css`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    &:hover { background-color: #0056b3; }
  `,
  catchPhrase: css`
    color: black;
    background-color: transparent;
    &:hover { font-weight: bold; }
  `,
};

// 2. HTML 태그(a)를 감싸 스타일링된 컴포넌트 생성
export const StyledLinkItem = styled.a<StyledLinkItemProps>`
  /* 기본 스타일 */
  border: none;
  border-radius: 1rem;
  font-size: 16px;
  cursor: pointer;

  transition: transform 0.3s ease-in-out, background-color 0.2s ease;
  
  &:hover {
    color: black;
    /* 3. 살짝 확대 */
    transform: scale(1.05); 
    
    /* z-index를 높여서 다른 요소 위에 떠오르는 느낌 강조 */
    z-index: 10; 
  }

  ${(props) => themeStyles[props.$theme]}

  /* 비활성화 상태 스타일 */
  ${(props) =>
    props.$disabled &&
    `
    cursor: not-allowed;
    opacity: 0.6;
  `}
`;