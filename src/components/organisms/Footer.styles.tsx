// src/components/organisms/Footer.styles.tsx

import styled, { css } from 'styled-components';
import { tablet } from '../../styles/mixins/mediaQueries';

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 11rem;
    background-color: #0D2538;
    text-color: white;
    padding: 2rem 1.5rem;
    gap: 1.5rem;

    ${tablet(css`
        flex-direction: column;
        align-items: center;
        padding: 1.5rem 1rem;
        height: 12rem;
    `)}
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 0.5rem;
    width: auto;
    height: auto;
`;

export const InfoContainer = styled.p`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;

    ${tablet(css`
        align-items: flex-start;
    `)}
`;
