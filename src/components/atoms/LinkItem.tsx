// src/components/atoms/LinkItem.tsx

import React from 'react';
import { StyledLinkItem } from './LinkItem.styles'; // 스타일 컴포넌트 가져오기

export type LinkItemTheme = 'primary' | 'catchPhrase' | 'emptyPrimary';

// 1. 컴포넌트가 외부에서 받을 Props 인터페이스 정의
export interface LinkItemProps {
    to: string; // 링크 URL
    children: React.ReactNode; // 링크 내부에 표시될 내용
    theme?: LinkItemTheme; // 링크 테마
    isOutLine?: boolean; // 배경 색 적용 여부
    isLarge?: boolean; // 큰 크기 적용 여부
    className?: string; // 외부에서 스타일 오버라이드를 위한 className
}

// 2. Styled Component를 사용한 실제 LinkItem 컴포넌트
const LinkItem: React.FC<LinkItemProps> = ({
    to,
    children,
    theme = 'primary',
    isOutLine = false,
    isLarge = false,
    className,
}) => {
    return (
        <StyledLinkItem
            to={to}
            $theme={theme}
            className={className}
            $isOutLine={isOutLine}
            $isLarge={isLarge}
        >
            {children}
        </StyledLinkItem>
    );
};

export default LinkItem;