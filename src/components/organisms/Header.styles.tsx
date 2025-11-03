// src/components/organisms/Header.styles.tsx

import styled, { css } from 'styled-components';
import { tablet } from '../../styles/mixins/mediaQueries';

interface StyledHeaderProps {
  $isScrolled: boolean;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  position: fixed;
  display: flex;
  width: calc(100% - 2rem);
  max-width: 1200px;
  border-radius: 1rem;
  left: 50%;
  transform: translateX(-50%);
  top: 1rem;
  background-color: rgba(255, 255, 255, 0.6); 
  z-index: 1000;
  padding: 1rem 1.5rem;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;

  .center-menu {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      
      ${tablet(css`
        display: none; 
      `)}
  }

  .right-button {
      ${tablet(css`
          display: none; 
      `)}
  }
  
  ${tablet(css`
      top: 0;
      padding: 0.5rem;
      width: 100%;
      max-width: none;
      background-color: white;
      border-radius: 0;
      left: 0;
      transform: none;
  `)}
  
  .hamburger-menu {
      display: none; /* 데스크탑에서는 숨김 */

      ${tablet(css`
          /* 🚨 768px 이하에서 보이기 */
          display: block; 
          z-index: 1010; /* 헤더보다 위에 */
      `)}
  }

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