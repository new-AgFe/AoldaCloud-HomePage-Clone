// src/features/Home/components/countingSection.styles.tsx

import styled from 'styled-components';
import { tablet } from '../../../styles/mixins/mediaQueries';

export const StyledCountingSection = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    margin: 0 auto;
    align-items: center;
    padding: 4rem 0;

    ${tablet`
        align-items: flex-start;
        padding: 2rem;
    `}
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
    `}
`;

export const NumberBlockWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 1.5rem;

    ${tablet`
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    `}
`;

export const NumberBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    width: 24rem;
    height: 8rem;
    background-color: transparent;
    border: 1px solid #F0F0F0;
    border-radius: 1rem;
    align-items: center;
    justify-content: center;

    ${tablet`
        width: 100%;
        margin: 0;
    `}
`;