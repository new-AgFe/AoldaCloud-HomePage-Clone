// src/components/atoms/Typography.tsx

import React from 'react';
import { StyledTypography } from './Typography.styles'; // 스타일 컴포넌트 가져오기

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption';

// 1. 컴포넌트가 외부에서 받을 Props 인터페이스 정의
export interface TypographyProps {
  children: React.ReactNode; // 텍스트 내용
  variant?: TypographyVariant; // 텍스트 변형
  className?: string; // 외부에서 스타일 오버라이드를 위한 className
}

// 2. Styled Component를 사용한 실제 Typography 컴포넌트
const Typography: React.FC<TypographyProps> = ({
    children,
    variant = 'body',
    className,
}) => {
    return (
    <StyledTypography
        $variant={variant}
        className={className}
    >
        {children}
    </StyledTypography>
    );
};

export default Typography;