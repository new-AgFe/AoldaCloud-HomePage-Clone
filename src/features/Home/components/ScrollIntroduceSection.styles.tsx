// src/features/Home/components/ScrollIntroduceSection.styles.tsx

import styled from "styled-components"

export const StyledScrollIntroduceSection = styled.section`
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
    height: 40rem;
    padding: 1.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
`;
export const ImageWrapper = styled.div`
    display: flex;
    flex: 9;
    position: relative;
    width: 100%;
    overflow: hidden;
`;

export const TypographyWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 5rem;
    z-index: 10;
    color: white;
    text-align: left;
    width: 50%;
`;