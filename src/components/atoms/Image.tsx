// src/components/atoms/Image.tsx

import React from 'react';
import { StyledImage } from './Image.styles';

export interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  bright?: string;
  fit?: boolean;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  bright,
  fit,
  className,
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      bright={bright}
      fit={fit}
      className={className}
    />
  );
}
export default Image;