// src/components/organisms/Footer.tsx

import LogoWhite from '../../assets/Logo_white.svg';
import Image from '../atoms/Image';
import Typography from '../atoms/Typography';
import { StyledFooter, ImageContainer, InfoContainer } from './Footer.styles';

const Footer = () => {
    return (
        <StyledFooter>
            {/* ... 다른 UI 요소 */}
            <ImageContainer>
                <Image src={LogoWhite} alt="Logo" width='10rem' />
                <Typography variant="caption" color="#A1B3C4">교내 클라우드 인프라 개발/운영 소학회</Typography>
            </ImageContainer>
            <InfoContainer>
                <Typography variant="caption" color="#A1B3C4">경기도 수원시 영통구 원천동 월드컵로 206 아주대학교</Typography>
                <Typography variant="caption" color="#A1B3C4">회장 이나현 부회장 이나현 총무 김화균</Typography>
            </InfoContainer>
        </StyledFooter>
    );
};

export default Footer;