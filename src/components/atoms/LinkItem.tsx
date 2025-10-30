// src/components/atoms/LinkItem.tsx

import React from 'react';
import { StyledLinkItem } from './LinkItem.styles'; // 스타일 컴포넌트 가져오기

export type LinkTheme = 'primary' | 'catchPhrase';

// 1. 컴포넌트가 외부에서 받을 Props 인터페이스 정의
export interface LinkProps {
  to: string; // 링크 URL
  children: React.ReactNode; // 링크 내부에 표시될 내용
  theme?: LinkTheme; // 링크 테마
  className?: string; // 외부에서 스타일 오버라이드를 위한 className
}

// 2. Styled Component를 사용한 실제 LinkItem 컴포넌트
const LinkItem: React.FC<LinkProps> = ({
  to,
  children,
  theme = 'primary',
  className,
}) => {
  return (
    <StyledLinkItem
      to={to}
      $theme={theme}
      className={className}
    >
      {children}
    </StyledLinkItem>
  );
};

export default LinkItem;