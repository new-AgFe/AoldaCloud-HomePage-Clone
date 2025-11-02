// src/features/Home/components/LandingSection.tsx

import React from 'react';
import Image from '../../../components/atoms/Image';
import LandingImage from '../../../assets/schoolImg.png';
import InfoBlock from '../../../components/molecules/InfoBlock';
import { StyledLandingSection, ImageWrapper, BlockWrapper } from './LandingSection.styles';

const LandingSection: React.FC = () => {
    return (
        <StyledLandingSection>
            <ImageWrapper>
                <Image src={LandingImage} alt="Landing Image" width="100%" height='28rem' />
            </ImageWrapper>
            <BlockWrapper>
                <InfoBlock title={<>아올다,<br />처음이신가요?</>} TypographyVariant='h3' buttonLabel='사용 설명서 →' linkUrl='/start' />
                <InfoBlock title={<>저희의 활동을<br />모아봤어요!</>} TypographyVariant='h3' buttonLabel='테크 블로그 →' linkUrl='/blog'/>
            </BlockWrapper>
        </StyledLandingSection>
    );
};

export default LandingSection;