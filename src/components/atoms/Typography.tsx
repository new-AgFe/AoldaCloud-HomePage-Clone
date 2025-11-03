// src/components/atoms/Typography.tsx

import React from 'react';
import { StyledTypography } from './Typography.styles';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption';

export interface TypographyProps {
  children: React.ReactNode;
  variant?: TypographyVariant;
  color?: string;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
    children,
    variant = 'body',
    color,
    className,
}) => {
    return (
    <StyledTypography
        variant={variant}
        color={color}
        className={className}
    >
        {children}
    </StyledTypography>
    );
};

export default Typography;