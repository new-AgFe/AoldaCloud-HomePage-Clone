// src/components/atoms/Typography.styles.tsx

import styled, { css } from 'styled-components';
import { type TypographyVariant } from './Typography';
import { tablet } from '../../styles/mixins/mediaQueries';

interface StyledTypographyProps {
    $variant: TypographyVariant;
    $color?: string;
}
export const StyledTypography = styled.span<StyledTypographyProps>`
    color: ${(props) => props.$color || 'inherit'};

    ${(props) => {
        switch (props.$variant) {
            case 'h1':
                return css`
                    font-size: 2.5rem;
                    font-weight: bold;
            `;
            case 'h2':
                return css`
                    font-size: 2rem;
                    font-weight: bold;
                `;
            case 'h3':
                return css`
                    font-size: 1.5rem;
                    font-weight: bold;
            `;
            case 'body':
                return css`
                    font-size: 1rem;
                    font-weight: normal;
            `;
            case 'caption':
                return css`
                    color: #A1B3C4;
                    font-size: 0.875rem;
                    font-weight: light;
                    ${tablet(css`
                        font-size: 0.75rem;
                    `)}
            `;
            default:
                return css`
                    font-size: 1rem;
                    font-weight: normal;
            `;
        }
    }}
`;