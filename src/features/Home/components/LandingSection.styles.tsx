// src/features/Home/components/LandingSection.styles.tsx

import styled, { css } from 'styled-components';
import { tablet } from '../../../styles/mixins/mediaQueries';

export const LandingSectionContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem 0;

    ${tablet(css`
    flex-direction: column; /* 가로 -> 세로로 변경 */
    gap: 30px; /* 이미지와 아래 블록 사이의 간격 추가 */
    `)}
`;

export const ImageWrapper = styled.div`
    flex: 9;
    position: relative;
    display: flex;
    padding-left: 1.5rem;

    ${tablet(css`
    width: 100%;
    flex: none;
    padding: 0 1.5rem;
    `)}
`;
export const BlockWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1.5rem;

    ${tablet(css`
        flex-direction: row;
        width: 100%;
        flex: none;
    
        & > * { 
        flex: 1;
        }
    `)}
`;