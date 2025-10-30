// src/components/molecules/InfoBlock.styles.tsx

import styled from 'styled-components';

export const InfoBlockContainer = styled.div`
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  border: 0.8px solid #e0e0e0;
  width: 100%;
  box-sizing: border-box;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 1rem);
`;
export const LinkItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;