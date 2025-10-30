// src/components/atoms/Button.tsx

import React from 'react';
import { StyledButton } from './Button.styles'; // 스타일 컴포넌트 가져오기

export type ButtonTheme = 'primary' | 'catchPhrase';

// 1. 컴포넌트가 외부에서 받을 Props 인터페이스 정의
export interface ButtonProps {
  children: React.ReactNode; // 버튼 내부에 표시될 내용
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  theme?: ButtonTheme; // 버튼 테마
  className?: string; // 외부에서 스타일 오버라이드를 위한 className
}

// 2. Styled Component를 사용한 실제 Button 컴포넌트
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  theme = 'primary',
  className,
}) => {
  return (
    <StyledButton
      $theme={theme}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;