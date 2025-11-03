// src/features/Home/components/HorisonScrollSection.tsx

import React, { useRef, useEffect } from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import Typography from "../../../components/atoms/Typography";
import Customer from '../../../components/molecules/Customer';
import { GrayBar } from "../../../components/atoms/GrayBar";
import { CUSTOMER_LIST, LIST_TOP, LIST_BOTTOM } from '../../../constants/CustomerData';
import { StyledHorisonScrollSection, StyledScrollContainer, StyledScrollWrapper } from "./HorisonScrollSection.styles"

const SCROLL_SPEED = 0.5; // 공통 스크롤 속도

const HorisonScrollSection: React.FC = () => {
    const topRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const isTablet = useMediaQuery();

    const ListForRender = [...CUSTOMER_LIST, ...CUSTOMER_LIST, ...CUSTOMER_LIST];

    useEffect(() => {
        const topContainer = topRef.current;
        const bottomContainer = bottomRef.current;
        const sectionContainer = sectionRef.current;
        if (!topContainer || !bottomContainer || !sectionContainer) return;

        let animationFrameId: number;
        let lastTime: number | null = null;
        
        const autoScroll = (timestamp: number) => {
            if (!lastTime) lastTime = timestamp;
            const deltaTime = (timestamp - lastTime) / 16; // 16ms 기준 프레임 조정

            if (!isTablet) {
                /* ---------------------------------------------------- */
                /* 🚨 [데스크탑/가로 스크롤 로직] */
                /* ---------------------------------------------------- */
                
                topContainer.scrollLeft += SCROLL_SPEED * deltaTime;
                const halfScrollWidth = topContainer.scrollWidth / 2; // 전체 너비의 절반 지점

                if (topContainer.scrollLeft >= halfScrollWidth) {
                    // 🚨 복제된 리스트의 시작 지점으로 순간 이동
                    topContainer.scrollLeft = 0; 
                }

                // 🚨 2. 하단 스크롤 로직 (우 -> 좌)
                bottomContainer.scrollLeft -= SCROLL_SPEED * deltaTime;

                if (bottomContainer.scrollLeft <= halfScrollWidth) {
                    // 🚨 끝 지점 (스크롤 가능한 최대 위치)으로 순간 이동
                    bottomContainer.scrollLeft = bottomContainer.scrollWidth - bottomContainer.clientWidth; 
                }

            } else {
                /* ---------------------------------------------------- */
                /* 🚨 [모바일/세로 스크롤 로직] */
                /* ---------------------------------------------------- */
                
                const verticalContainer = sectionContainer;

                // 1. 아래 -> 위 (scrollTop 감소)
                verticalContainer.scrollTop -= SCROLL_SPEED * deltaTime;

                // 2. 맨 위 도달 시 맨 아래로 이동
                if (verticalContainer.scrollTop <= 0) {
                    // 🚨 scrollTop을 스크롤 가능한 최대치로 이동시켜 루프를 만듭니다.
                    verticalContainer.scrollTop = verticalContainer.scrollHeight - verticalContainer.clientHeight;
                }
            }

            lastTime = timestamp;
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);
        return () => { cancelAnimationFrame(animationFrameId); };

    }, [isTablet]); // 🚨 isTablet이 변할 때마다 useEffect가 다시 실행되어 로직을 전환합니다.
    
    return (
        <StyledHorisonScrollSection>
            <GrayBar />
            <div style={{display: 'flex', flexDirection: 'column', width: '20rem', textAlign: 'left', marginTop: '1.5rem'}}>
                <Typography variant="h2" color='#666'>
                    이미
                    <Typography variant="h2" color='#0E76C4'> 많은 곳에서 사용</Typography>
                    되고 있는
                    <br/>
                    아올다 클라우드 
                </Typography>
                <br/>
                <Typography variant="body" color='#666'>
                    아올다 클라우드는 아주대학교 대/내외적으로 사용되는 다양한 서비스를 안정적으로 운영하기 위해 이곳저곳에서 사용되고 있어요
                </Typography>
            </div>
            <div>
                <StyledScrollWrapper ref={sectionRef} $isVertical={isTablet}>
                    {/* 🚨 Top Container (데스크탑: 좌->우) */}
                    <StyledScrollContainer ref={topRef} $direction="ltr" $isTablet={isTablet} $isVertical={isTablet}>
                        {(ListForRender).map((customer, index) => (
                        // 🚨 key는 고유해야 하므로 index를 사용하여 임시로 고유하게 만듭니다.
                            <Customer key={`${customer.id}-top-${index}`} data={customer} /> 
                        ))}
                    </StyledScrollContainer>

                    {/* 🚨 Bottom Container (데스크탑: 우->좌) */}
                    {!isTablet && (
                        <StyledScrollContainer ref={bottomRef} $direction="rtl" $isTablet={isTablet} $isVertical={isTablet}>
                            {ListForRender.map((customer, index) => (
                                <Customer key={`${customer.id}-bottom-${index}`} data={customer} /> 
                            ))}
                        </StyledScrollContainer>
                    )}
                </StyledScrollWrapper>
            </div>
        </StyledHorisonScrollSection>
    );
}

export default HorisonScrollSection;