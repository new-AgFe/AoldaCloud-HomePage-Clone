// src/components/molecules/InfoBlock.tsx

import React from 'react';
import Typography, {type TypographyVariant} from '../atoms/Typography';
import LinkItem, { type LinkItemTheme } from '../atoms/LinkItem';
import useMediaQuery from '../../hooks/useMediaQuery';
import { InfoBlockContainer, TextContainer, LinkItemContainer, type InfoBlockTheme } from './InfoBlock.styles';

export interface InfoBlockProps {
    title: React.ReactNode;
    $theme?: InfoBlockTheme;
    description?: string;
    TypographyVariant?: TypographyVariant;
    buttonLabel: string;
    linkUrl: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ 
    title,
    $theme = 'catchPhrase',
    description,
    TypographyVariant = 'body',
    buttonLabel,
    linkUrl,
}) => {
    const isTablet = useMediaQuery(); 
    
    // 2. InfoBlock 테마에 따라 LinkItem에 적용할 테마를 결정
    let linkThemeToApply : LinkItemTheme;

    if (isTablet) {
        linkThemeToApply = 'primary'; 
    } else {
        linkThemeToApply  = $theme === 'primary' ? 'primary' : 'catchPhrase';
    }

    const tabletProps = {
        isLarge: true,
        isOutline: true,
    };

    const desktopProps = {
        isLarge: false,
        isOutline: false,
    };

    const dynamicLinkProps = isTablet ? tabletProps : desktopProps;

    if ($theme === 'catchPhrase') {
        return (
            <InfoBlockContainer $theme={$theme}>
                <TextContainer $theme={linkThemeToApply}>
                    <Typography variant={TypographyVariant}>{title}</Typography>
                    {description && <Typography variant={TypographyVariant}>{description}</Typography>}
                </TextContainer>
                <LinkItemContainer>
                    <LinkItem theme={linkThemeToApply} to={linkUrl} {...dynamicLinkProps}>{buttonLabel}</LinkItem>
                </LinkItemContainer>
            </InfoBlockContainer>
        );
    }

    return (
        <InfoBlockContainer $theme={$theme}>
            <TextContainer $theme={linkThemeToApply}>
                <Typography variant={TypographyVariant}>{title}</Typography>
                {description && <Typography variant={TypographyVariant}>{description}</Typography>}
            </TextContainer>
            <LinkItemContainer $theme={linkThemeToApply}>
                <LinkItem theme={linkThemeToApply} to={linkUrl}>{buttonLabel}</LinkItem>
            </LinkItemContainer>
        </InfoBlockContainer>
    );
};

export default InfoBlock;
