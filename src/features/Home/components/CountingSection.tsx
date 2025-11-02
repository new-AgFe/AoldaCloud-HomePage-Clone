// src/features/Home/components/CountingSection.tsx

import React from 'react';
import { NumberBlock, NumberBlockWrapper, TypographyContainer, CountingSectionContainer } from './CountingSection.styles';
import Typography from '../../../components/atoms/Typography';
import { GrayBar } from '../../../components/atoms/GrayBar';


const CountingSection: React.FC = () => {
    return (
        <CountingSectionContainer>
            <GrayBar />
            <TypographyContainer>
                <Typography variant="h2" color='#0E76C4'>숫자로 보는 아올다</Typography>
            </TypographyContainer>
            <NumberBlockWrapper>
                <NumberBlock>
                    <div style={{ color: '#A2A2A2' }}>회원 수</div>
                    <div style={{ color: '#0E76C4' }}>
                        <Typography variant="h1">30+</Typography>
                        <Typography variant="h2">명</Typography>
                    </div>
                </NumberBlock>
                <NumberBlock>
                    <div style={{ color: '#A2A2A2' }}>프로젝트 수</div>
                    <div style={{ color: '#0E76C4' }}>
                        <Typography variant="h1">10+</Typography>
                        <Typography variant="h2">개</Typography>
                    </div>
                </NumberBlock>
                <NumberBlock>
                    <div style={{ color: '#A2A2A2' }}>이벤트 수</div>
                    <div style={{ color: '#0E76C4' }}>
                        <Typography variant="h1">200+</Typography>
                        <Typography variant="h2">회</Typography>
                    </div>
                </NumberBlock>
            </NumberBlockWrapper>
        </CountingSectionContainer>
    );
}

export default CountingSection;