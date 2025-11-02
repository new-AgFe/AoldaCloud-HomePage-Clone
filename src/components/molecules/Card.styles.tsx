// src/components/molecules/Card.styles.tsx

import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 18rem;
    height: 20rem;
    border: 0.8px solid #e0e0e0;
    border-radius: 1rem;
    overflow: hidden;
    padding: 2rem 0;
    &:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transform: translateY(-4px);
        transition: all 0.3s ease;
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 2.5rem;
    gap: 1rem;

    ${(props) => props.color === 'blue' && `
        color: #0E76C4;
    `}
    ${(props) => props.color === 'red' && `
        color: #C40E0E;
    `}
`;