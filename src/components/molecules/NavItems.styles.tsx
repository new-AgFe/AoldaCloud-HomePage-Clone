// src/components/molecules/NavItems.styles.tsx

import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center; 
  justify-content: center; 
  gap: 20px; /* 버튼들 사이의 간격 */
  flex-grow: 1; 
  
  @media (max-width: 768px) { 
    flex-direction: column;
    gap: 10px; /* 모바일에서는 간격을 줄입니다. */
  }
`;