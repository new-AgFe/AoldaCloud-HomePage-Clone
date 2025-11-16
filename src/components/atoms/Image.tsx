// src/components/atoms/Image.tsx

import React from 'react';
import { StyledImage } from './Image.styles';

export interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  bright?: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  bright,
  className,
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      bright={bright}
      className={className}
    />
  );
}
export default Image;