// src/features/Home/components/ScrollIntroduceSection.tsx

import React from "react";
import Image from "../../../components/atoms/Image";
import Typography from "../../../components/atoms/Typography";
import { StyledScrollIntroduceSection, ImageWrapper, TypographyWrapper } from "./ScrollIntroduceSection.styles"

const ScrollIntroduceSection: React.FC = ({}) => {
    return (
        <StyledScrollIntroduceSection>
            <ImageWrapper>
                <TypographyWrapper>
                    <Typography variant="h2" color="black">
                        아올다 클라우드는
                        아주대학교 학생을 위한
                        무료 클라우드 서비스입니다
                    </Typography>
                </TypographyWrapper>
                <Image src="#" alt="Introduction Image" />
            </ImageWrapper>
        </StyledScrollIntroduceSection>
    );
};

export default ScrollIntroduceSection