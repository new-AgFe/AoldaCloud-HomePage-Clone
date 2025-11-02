// src/features/Home/components/CardViewSection.tsx

import React from 'react';
import Card from '../../../components/molecules/Card';
import { StyledCardViewSection, CardsWrapper } from './CardViewSection.styles';
import Typography from '../../../components/atoms/Typography';
import ImgNoCredit from "../../../assets/ImgNoCredit.png";
import ImgDataServer from "../../../assets/ImgDataServer.png";
import ImgUser from "../../../assets/ImgUser.png";
import ImgWallet from "../../../assets/ImgWallet.png"
import ImgProfile from "../../../assets/ImgProfile.png"
import ImgWrench from "../../../assets/ImgWrench.png"
import { GrayBar } from '../../../components/atoms/GrayBar';

type CardViewSectionTheme = 'blue' | 'red';

interface CardViewSectionProps {
    theme: CardViewSectionTheme;
}

const CardViewSection: React.FC<CardViewSectionProps> = ({ theme }) => {
    let color = '';
    
    if (theme === 'blue') {
        color = '#0E76C4';
        return (
            <StyledCardViewSection>
                <GrayBar />
                <div style={{display: 'flex', flexDirection: 'column', width: '18rem', textAlign: 'left'}}>
                    <Typography variant="h2" color='#666'>자유롭게 꿈을 펼치기 위해<br/>아올다가 없앤 
                        <Typography variant="h2" color={color}> 불편함 3가지</Typography>
                    </Typography>
                    <br/>
                    <Typography variant="body" color='#666'>
                        아주인 모두가 자유롭게 꿈을 펼칠 수 있도록 아래 3가지를 없앴어요
                    </Typography>
                </div>
                
                <CardsWrapper>
                    <Card
                        imageSrc={ImgNoCredit}
                        title="유료과금 없음"
                        description="서비스 내 결제가 필요한 부가서비스가 없어요"
                        $color={color}
                    />
                    <Card
                        imageSrc={ImgDataServer}
                        title="인스턴스 개수제한 없음"
                        description="기본 10개, 추가 인스턴스가 필요한 경우 요청에 따라 원하는 만큼 가용량을 설정해드려요"
                        $color={color}
                    />
                    <Card
                        imageSrc={ImgUser}
                        title="협업계정 수 제한 없음"
                        description="프로젝트 당 협업을 위해 등록할 수 있는 계정의 개수제한이 없어요"
                        $color={color}
                    />
                </CardsWrapper>
            </StyledCardViewSection>
        );
    } else {
        color = '#C40E0E';
        return (
            <StyledCardViewSection>
                <GrayBar />
                <div style={{display: 'flex', flexDirection: 'column', width: '18rem', textAlign: 'left'}}>
                    <Typography variant="h2" color='#666'>자유롭게 꿈을 펼치기 위해<br/>함께 만들어가는
                        <Typography variant="h2" color={color}> 약속 3가지</Typography>
                    </Typography>
                    <br/>
                    <Typography variant="body" color='#666'>
                        아주인 모두가 자유롭게 꿈을 펼칠 수 있도록 아래 3가지를 약속해요
                    </Typography>
                </div>
                
                <CardsWrapper>
                    <Card
                        imageSrc={ImgWallet}
                        title="상업적 사용 금지"
                        description="아주대학교 SW사업단 정책에 따라, 아올다 클라우드를 이용해 상업적 성격의 서비스를 운용할 수 없어요"
                        $color={color}
                    />
                    <Card
                        imageSrc={ImgProfile}
                        title="계정대여 금지"
                        description="아주대학교 SW사업단 정책에 따라, 아주대학교 구성원이 아닌 외부인은 아올다 클라우드를 사용할 수 없어요"
                        $color={color}
                    />
                    <Card
                        imageSrc={ImgWrench}
                        title="인프라 무단조작 금지"
                        description="아올다 클라우드는 팔달관 334호에서 실제 물리서버를 볼 수 있지만, 보다 안정적인 운영을 위해 조작행위는 금지해요"
                        $color={color}
                    />
                </CardsWrapper>
            </StyledCardViewSection>
        );
    }

}

export default CardViewSection;