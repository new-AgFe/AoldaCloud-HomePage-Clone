// src/components/atoms/Image.tsx

import React from 'react';
import { StyledImage } from './Image.styles'; // 스타일 컴포넌트 가져오기

// 1. 컴포넌트가 외부에서 받을 Props 인터페이스 정의
export interface ImageProps {
  src: string; // 이미지 소스 URL
  alt: string; // 대체 텍스트
  width?: string; // 이미지 너비
  height?: string; // 이미지 높이
  className?: string; // 외부에서 스타일 오버라이드를 위한 className
}

// 2. Styled Component를 사용한 실제 Image 컴포넌트
const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
export default Image;