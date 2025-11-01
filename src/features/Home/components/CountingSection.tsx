// src/features/Home/components/CountingSection.tsx

import React from 'react';
import { NumberBlock, NumberBlockContainer, TypographyContainer, CountingSectionContainer } from './CountingSection.styles';
import Typography from '../../../components/atoms/Typography';

const CountingSection: React.FC = () => {
    return (
        <CountingSectionContainer>
            <div></div>
            <TypographyContainer>
                <Typography variant="h3" color='#0E76C4'>숫자로 보는 아올다</Typography>
            </TypographyContainer>
            <NumberBlockContainer>
                <NumberBlock>
                    <div style={{ color: '#A2A2A2' }}>회원 수</div>
                    <div style={{ color: '#0E76C4' }}>
                        <Typography variant="h1">30+</Typography>
                        <Typography variant="h3">명</Typography>
                    </div>
                </NumberBlock>
                <NumberBlock>
                    <div style={{ color: '#A2A2A2' }}>프로젝트 수</div>
                    <div style={{ color: '#0E76C4' }}>
                        <Typography variant="h1">10+</Typography>
                        <Typography variant="h3">개</Typography>
                    </div>
                </NumberBlock>
                <NumberBlock>
                    <div style={{ color: '#A2A2A2' }}>이벤트 수</div>
                    <div style={{ color: '#0E76C4' }}>
                        <Typography variant="h1">200+</Typography>
                        <Typography variant="h3">회</Typography>
                    </div>
                </NumberBlock>
            </NumberBlockContainer>
        </CountingSectionContainer>
    );
}

export default CountingSection;