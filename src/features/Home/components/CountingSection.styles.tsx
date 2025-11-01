// src/features/Home/components/countingSection.styles.tsx

import styled from 'styled-components';
import { tablet } from '../../../styles/mixins/mediaQueries';

export const CountingSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`;

export const TypographyContainer = styled.div`
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

export const NumberBlockContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 2rem;

    ${tablet`
        flex-direction: column;
        align-items: center;
        
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
    display: flex;
    align-items: center;
    justify-content: center;

    ${tablet`
        width: calc(100% - 3rem);
    `}
`;