// src/features/Home/components/LastPageSection.tsx

import React from 'react';
import Typography from '../../../components/atoms/Typography';
import { LastPageSectionContainer, TypographyContainer, BlockWrapper } from './LastPageSection.styles'
import InfoBlock from '../../../components/molecules/InfoBlock';
import { GrayBar } from '../../../components/atoms/GrayBar';


const LastPageSection: React.FC = () => {
    return (
        <LastPageSectionContainer>
            <GrayBar />
            <TypographyContainer>
                <Typography variant="h2" color='#0E76C4'>아올다, 이제 한번</Typography>
                <Typography variant="h2" color='#0E76C4'>만나볼까요?</Typography>
            </TypographyContainer>
            <BlockWrapper>
                <InfoBlock title={<>아올다,<br />처음이신가요?</>} $theme='primary' TypographyVariant='h3' buttonLabel='사용 설명서 →' linkUrl='/start' />
                <InfoBlock title={<>저희의 활동을<br />모아봤어요!</>} $theme='primary' TypographyVariant='h3' buttonLabel='테크 블로그 →' linkUrl='/blog'/>
            </BlockWrapper>
        </LastPageSectionContainer>
    );
}

export default LastPageSection;