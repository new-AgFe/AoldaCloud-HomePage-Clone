// src/features/Home/components/HorisonScrollSection.styles.tsx

import styled, { css } from "styled-components"
import { tablet } from "../../../styles/mixins/mediaQueries";

interface StyledScrollContainerProps {
    $direction: string; // 'ltr' 또는 'rtl'
    $isTablet: boolean; // 👈 이 Prop을 추가해야 합니다.
    $isVertical: boolean
}

export const StyledHorisonScrollSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
`;

export const StyledScrollContainer = styled.div<StyledScrollContainerProps>`
    display: flex;
    flex-direction: row;
    margin-top: 1.5rem; 
    overflow-x: auto;
    overflow-y: hidden;
    gap: 20px;

    &::-webkit-scrollbar {
        display: none;
    }
    
    /* 3. 모바일 세로 전환 로직 (이제 $isTablet을 사용할 수 있습니다!) */
    ${(props) => props.$isTablet && css`
        flex-direction: column; 
        overflow-x: hidden;
        overflow-y: scroll;
        justify-content: center;
        align-items: center;
    `}
`;

export const StyledScrollWrapper = styled.div<{ $isVertical: boolean }>`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    scrollbar-width: 0px;

    

    ${(props) => props.$isVertical && css`
        height: 400px
        overflow-y: scroll;
        overflow-x: hidden;
    `}
`;