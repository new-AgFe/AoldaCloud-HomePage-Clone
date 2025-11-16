// src/features/Home/components/ScrollIntroduceSection.styles.tsx

import styled from "styled-components"
import { tablet }  from "../../../styles/mixins/mediaQueries";

export const StyledScrollIntroduceSection = styled.section`
    display: flex;
    margin: 0 auto;
    position: relative;
    width: 100%;
    max-width: 1400px;
    height: 40rem;
    padding: 1.5rem;
    justify-content: center;
    align-items: center;

    ${tablet`
        position: static;
        height: auto;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
    `}
`;
export const ImageWrapper = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    border-radius: 1rem;

    ${tablet`
        height: 20rem;
        flex-direction: column;
    `}
`;

export const TypographyWrapper = styled.div`
    position: absolute;
    top: 45%;
    left: 5rem;
    z-index: 10;
    color: white;
    text-align: left;
    width: auto;

    ${tablet`
        position: static;
        color: black;
        left: 0;
    `}
`;