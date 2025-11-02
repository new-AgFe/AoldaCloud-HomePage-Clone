// src/components/atoms/LinkItem.styles.tsx

import styled, { css } from 'styled-components';
import { type LinkItemTheme } from './LinkItem';


interface StyledLinkItemProps {
    $theme: LinkItemTheme;
    to: string;
    $isLarge?: boolean;
    $isOutLine?: boolean;
}

const themeStyles = {
    primary: css`
        padding: 10px 20px;
        background-color: #0E76C4;
        color: white;
    `,
    catchPhrase: css`
        color: black;
        background-color: transparent;
    `,
    emptyPrimary: css`
        padding: 10px 20px;
        background-color: transparent;
        color: #0E76C4;
        border: 2px solid #0E76C4;
    `,
};

// 2. HTML 태그(a)를 감싸 스타일링된 컴포넌트 생성
export const StyledLinkItem = styled.a<StyledLinkItemProps>`
    /* 기본 스타일 */
    border: none;
    border-radius: 1rem;
    font-size: 16px;
    cursor: pointer;
    ${(props) => themeStyles[props.$theme]}

    ${(props) =>
        props.$isLarge &&
        css`
            width: 15rem;
        
            font-size: 18px !important;
        `}
        
    ${(props) =>
        props.$isOutLine &&
        css`
            background-color: transparent !important;
            color: #0E76C4 !important;
            border: 1px solid #0E76C4 !important;
        `}

    transition: transform 0.3s ease-in-out, background-color 0.2s ease;

    &:hover {
        color: black;
        transform: scale(1.05); 
        z-index: 10; 
    }

`;