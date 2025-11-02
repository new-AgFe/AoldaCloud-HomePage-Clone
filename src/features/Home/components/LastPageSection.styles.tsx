// src/features/Home/components/LastPageSection.styles.tsx

import styled, { css } from 'styled-components';
import { tablet } from '../../../styles/mixins/mediaQueries';

export const LastPageSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    margin: 0 auto;
    align-items: center;
    padding: 4rem 0;
`;

export const TypographyContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    ${tablet`
        display: flex;
        align-items: flex-start;
        padding-left: 1.5rem;
    `}
`;

export const BlockWrapper = styled.div`
    margin-top: 1.5rem;
    display: flex;
    gap: 1.5rem;
    padding: 0 1.5rem;

    ${tablet(css`
        width: 100%;
        flex: none;
    
        & > * { 
        flex: 1;
        }
    `)}
`;