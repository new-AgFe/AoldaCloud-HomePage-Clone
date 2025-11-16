// src/components/atoms/Image.styles.tsx

import styled from 'styled-components';

interface StyledImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  bright?: string;
  fit?: boolean;
  className?: string;
}

export const StyledImage = styled.img<StyledImageProps>`
  width: ${(props) => (props.width ? `${props.width}` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}` : 'auto')};
  // max-height: 28rem;
  object-fit: ${(props) => (props.fit ? 'cover' : 'unset')};
  border-radius: 1rem;
  filter: brightness(${(props) => (props.bright ? props.bright : '100%')});
`;
export default StyledImage;