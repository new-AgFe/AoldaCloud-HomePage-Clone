// src/features/Home/components/LandingSection.tsx

import React from 'react';
import Image from '../../../components/atoms/Image';
import Button from '../../../components/atoms/Button';
import { LandingSectionContainer, ContentWrapper, TextContent, ImageWrapper } from './LandingSection.styles';

const LandingSection: React.FC = () => {
  return (
    <LandingSectionContainer>
      <ContentWrapper>
        <ImageWrapper>
          <Image src="../../assets/schoolImg.png" alt="Landing Image" />
        </ImageWrapper>
        <TextContent>
          <h1>Welcome to Our Website</h1>
          <p>Discover amazing content and connect with others.</p>
          {/* <Button >Get Started</Button> */}
        </TextContent>
      </ContentWrapper>
    </LandingSectionContainer>
  );
};

export default LandingSection;