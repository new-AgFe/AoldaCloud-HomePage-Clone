// src/components/atoms/Button.tsx

import React from 'react';
import { StyledButton } from './Button.styles';

export type ButtonTheme = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  theme?: ButtonTheme;
  className?: string;
}

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