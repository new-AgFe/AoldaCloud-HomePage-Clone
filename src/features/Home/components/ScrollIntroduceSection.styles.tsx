// src/features/Home/components/ScrollIntroduceSection.styles.tsx

import styled from "styled-components"

export const StyledScrollIntroduceSection = styled.section`
    desplay: flex;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
`;

export const ImageWrapper = styled.div`
    width: 100%;

`;

export const TypographyWrapper = styled.div`
    position: absolute;
    top: 2rem;
    left: 5rem;
    z-index: 10;
    color: white;
    text-align: left;
    width: 50%;
`;