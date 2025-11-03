// src/components/organisms/MobileMenuOverlay.styles.tsx

import styled, { css } from 'styled-components';

interface StyledOverlayProps {
  $isOpen: boolean;
}

export const StyledOverlay = styled.div<StyledOverlayProps>`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95); 

    z-index: 999;
    transition: transform 0.3s ease-out;

    transform: translateX(100%); 

    ${(props) =>
        props.$isOpen &&
        css`
        transform: translateX(0);
    `}
`;

export const StyledNavList = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 80px 20px 20px;
    gap: 1rem;
    align-items: flex-end;

    a {
        display: inline-block;
        text-align: right;
        font-size: 1.2rem;
        padding: 1rem 2rem; 
        color: black;
        border: none;
    }
`;