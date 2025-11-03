// src/components/atoms/LinkItem.tsx

import React from 'react';
import { StyledLinkItem } from './LinkItem.styles';

export type LinkItemTheme = 'primary' | 'catchPhrase' | 'emptyPrimary';

export interface LinkItemProps {
    to: string;
    children: React.ReactNode;
    theme?: LinkItemTheme;
    isOutLine?: boolean;
    isLarge?: boolean;
    className?: string;
}

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