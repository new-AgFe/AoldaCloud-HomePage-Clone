// src/features/Home/components/LandingSection.styles.tsx

import styled from 'styled-components';

export const LandingSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;
export const TextContent = styled.div`
  flex: 1;
  padding: 1rem 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
`;
export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;