// src/styles/mixins/mediaQueries.ts

import { css } from 'styled-components';
import { BREAKPOINTS } from '../theme/breakpoints';

// 모바일 환경
export const mobile = (inner: any) => css`
    @media (max-width: ${BREAKPOINTS.mobile}) {
        ${inner}
    }
`;

// 태블릿 환경
export const tablet = (inner: any) => css`
    @media (max-width: ${BREAKPOINTS.tablet}) {
        ${inner}
    }
`;