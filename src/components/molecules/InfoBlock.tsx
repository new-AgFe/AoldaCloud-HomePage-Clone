// src/components/molecules/InfoBlock.tsx

import React from 'react';
import Typography, {type TypographyVariant} from '../atoms/Typography';
import LinkItem, { type LinkTheme } from '../atoms/LinkItem';
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
    let linkThemeToApply : LinkTheme;

    if (isTablet) {
        linkThemeToApply = 'primary'; 
    } else {
        linkThemeToApply  = $theme === 'primary' ? 'primary' : 'catchPhrase';
    }

    if ($theme === 'catchPhrase') {
        
        // 3. 태블릿/모바일 크기일 때 적용할 Props
        const tabletProps = {
            isLarge: true,
            isOutline: true,
        };

        // 4. 데스크탑 크기일 때 적용할 Props (기본 스타일)
        const desktopProps = {
            isLarge: false,
            isOutline: false,
        };

        // 5. 현재 isTablet 값에 따라 Props 객체 선택
        const dynamicLinkProps = isTablet ? tabletProps : desktopProps;

        return (
            <InfoBlockContainer $theme={$theme}>
                <TextContainer>
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
            <TextContainer>
                <Typography variant={TypographyVariant}>{title}</Typography>
                {description && <Typography variant={TypographyVariant}>{description}</Typography>}
            </TextContainer>
            <LinkItemContainer>
                <LinkItem theme={linkThemeToApply} to={linkUrl}>{buttonLabel}</LinkItem>
            </LinkItemContainer>
        </InfoBlockContainer>
    );
};

export default InfoBlock;
