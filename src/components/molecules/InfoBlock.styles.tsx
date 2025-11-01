// src/components/molecules/InfoBlock.styles.tsx

import styled, { css } from 'styled-components';
import { tablet } from '../../styles/mixins/mediaQueries';

export type InfoBlockTheme = 'primary' | 'catchPhrase';

interface StyledInfoBlockProps {
    $theme: InfoBlockTheme;
}

const themeStylesMap = {
    catchPhrase: css`
        width: 13.25rem;
        height: 13.25rem;
        border-radius: 1rem;
        border: 0.8px solid #e0e0e0;
        justify-content: space-between;
    `,
    primary: css`
        width: 13.25rem;
        height: 7rem;
        border: none;
        justify-content: space-between;
    `,
};

export const InfoBlockContainer = styled.div<StyledInfoBlockProps>`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: white;
    width: 100%;
    height: auto;
    box-sizing: border-box;

    ${(props) => props.$theme === 'catchPhrase' && themeStylesMap.catchPhrase}
    ${(props) => props.$theme === 'primary' && css`
        ${themeStylesMap.primary}
    `}
    ${(props) => props.$theme === 'catchPhrase' && 
        tablet(css`
            ${themeStylesMap.primary}
            padding: 0;
        `)
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;

    ${tablet(css`
        align-items: center;
        text-align: center;
    `)}
`;
export const LinkItemContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    ${tablet(css`
        align-items: center;
        justify-content: center;
    `)}
`;