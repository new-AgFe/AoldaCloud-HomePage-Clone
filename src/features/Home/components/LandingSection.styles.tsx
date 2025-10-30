// src/features/Home/components/LandingSection.styles.tsx

import styled from 'styled-components';

export const LandingSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1300px; // 좌우 여백 고려
  width: 100%;
`;
export const ImageWrapper = styled.div`
  flex: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;
`;
export const BlockWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 1.5rem;
`;