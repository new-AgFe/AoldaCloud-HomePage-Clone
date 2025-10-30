// src/features/Home/components/LandingSection.tsx

import React from 'react';
import Image from '../../../components/atoms/Image';
import LandingImage from '../../../assets/schoolImg.png';
import InfoBlock from '../../../components/molecules/InfoBlock';
import { LandingSectionContainer, ContentWrapper, ImageWrapper, BlockWrapper } from './LandingSection.styles';

const LandingSection: React.FC = () => {
  return (
    <LandingSectionContainer>
      <ContentWrapper>
        <ImageWrapper>
          <Image src={LandingImage} alt="Landing Image" width="100%" height='28rem' />
        </ImageWrapper>
        <BlockWrapper>
          <InfoBlock title={<>아올다,<br />처음이신가요?</>} TypographyVariant='body' buttonLabel='사용 설명서 >' linkUrl='/start' width='13.25rem' />
          <InfoBlock title={<>저희의<br />활동을 모아봤어요!</>} TypographyVariant='body' buttonLabel='테크 블로그 >' linkUrl='/blog' width='13.25rem'/>
        </BlockWrapper>
      </ContentWrapper>
    </LandingSectionContainer>
  );
};

export default LandingSection;