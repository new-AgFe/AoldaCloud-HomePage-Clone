// src/components/organisms/Header.styles.tsx

import styled, { css } from 'styled-components';

interface StyledHeaderProps {
  $isScrolled: boolean;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  position: fixed;
  display: flex;
  width: calc(100% - 2rem); // 좌우 여백 고려
  max-width: 1200px; // 최대 너비 설정
  border-radius: 1rem;
  left: 50%;
  transform: translateX(-50%);
  top: 1rem;
  background-color: rgba(255, 255, 255, 0.6); 
  z-index: 1000;
  padding: 0.75rem 1.5rem;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease-in-out; // 부드러운 전환 효과

  ${(props) => 
    props.$isScrolled &&
    css`
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 1.5rem 1.5rem;
    `
  }
`;