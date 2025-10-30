// src/components/atoms/Typography.styles.tsx

import styled, { css } from 'styled-components';
import { type TypographyVariant } from './Typography';

interface StyledTypographyProps {
  $variant: TypographyVariant;
}
export const StyledTypography = styled.span<StyledTypographyProps>`
  color: black;
  
  ${(props) => {
    switch (props.$variant) {
      case 'h1':
        return css`
          font-size: 2.5rem;
          font-weight: bold;
        `;
      case 'h2':
        return css`
          font-size: 2rem;
          font-weight: semi-bold;
        `;
      case 'h3':
        return css`
          font-size: 1.5rem;
          font-weight: semi-bold;
        `;
      case 'body':
        return css`
          font-size: 1rem;
          font-weight: normal;
        `;
      case 'caption':
        return css`
          font-size: 0.875rem;
          font-weight: light;
        `;
      default:
        return css`
          font-size: 1rem;
          font-weight: normal;
        `;
    }
  }}
`;