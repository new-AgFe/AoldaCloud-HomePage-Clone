// src/features/Home/components/CountingSection.tsx

import React from 'react';
import { NumberBlock, NumberBlockWrapper, TypographyContainer, StyledCountingSection } from './CountingSection.styles';
import Typography from '../../../components/atoms/Typography';
import { GrayBar } from '../../../components/atoms/GrayBar';


const CountingSection: React.FC = () => {
    return (
        <StyledCountingSection>
            <GrayBar />
            <TypographyContainer>
                <Typography variant="h2" color='#0E76C4'>숫자로 보는 아올다</Typography>
            </TypographyContainer>
            <NumberBlockWrapper>
                <NumberBlock>
                    <div style={{ color: '#A2A2A2' }}>누적 사용자</div>
                    <div style={{ color: '#0E76C4' }}>
                        <Typography variant="h1">30+</Typography>
                        <Typography variant="h2">명</Typography>
                    </div>
                </NumberBlock>
                <NumberBlock>
                    <div style={{ color: '#A2A2A2' }}>누적 프로젝트 수</div>
                    <div style={{ color: '#0E76C4' }}>
                        <Typography variant="h1">10+</Typography>
                        <Typography variant="h2">개</Typography>
                    </div>
                </NumberBlock>
                <NumberBlock>
                    <div style={{ color: '#A2A2A2' }}>누적 블로깅</div>
                    <div style={{ color: '#0E76C4' }}>
                        <Typography variant="h1">200+</Typography>
                        <Typography variant="h2">회</Typography>
                    </div>
                </NumberBlock>
            </NumberBlockWrapper>
        </StyledCountingSection>
    );
}

export default CountingSection;