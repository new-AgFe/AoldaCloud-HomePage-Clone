// src/components/molecules/Customer.styles.tsx

import styled from "styled-components";

export const StyledCustomer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 17rem; 
    height: 7rem;
    padding: 2rem;
    border: 1px solid #eee; 
    border-radius: 8px;
    flex-shrink: 0;
`;

export const StyledImage = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    object-fit: cover;
    margin-right: 15px;
    flex-shrink: 0;
`;

export const CustomerContent = styled.div`
    display: flex;
    width: 10rem;
    height: 5rem;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    flex-grow: 1;
`;