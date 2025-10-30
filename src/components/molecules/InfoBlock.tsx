// src/components/molecules/InfoBlock.tsx

import React from 'react';
import Typography, {type TypographyVariant} from '../atoms/Typography';
import LinkItem from '../atoms/LinkItem';
import { InfoBlockContainer, TextContainer, LinkItemContainer } from './InfoBlock.styles';

export interface InfoBlockProps {
  title: React.ReactNode;
  description?: string;
  TypographyVariant?: TypographyVariant;
  buttonLabel: string;
  linkUrl: string;
  width?: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ 
  title,
  description,
  TypographyVariant = 'body',
  buttonLabel,
  linkUrl,
  width
}) => {
  return (
    <InfoBlockContainer style={{ width: width, height:width || 'auto' }}>
      <TextContainer>
        <Typography variant={TypographyVariant}>{title}</Typography>
        {description && <Typography variant={TypographyVariant}>{description}</Typography>}
      </TextContainer>
      <LinkItemContainer>
        <LinkItem theme='catchPhrase' to={linkUrl}>{buttonLabel}</LinkItem>
      </LinkItemContainer>
    </InfoBlockContainer>
  );
};

export default InfoBlock;
