// src/components/organisms/MobileMenuOverlay.tsx

import React from 'react';
import { StyledOverlay, StyledNavList } from './MobileMenuOverlay.styles';
import LinkItem from '../atoms/LinkItem';

interface MobileMenuOverlayProps {
    isOpen: boolean;
    // 메뉴를 닫는 함수도 필요합니다. (예: 메뉴 항목 클릭 시)
    onClose: () => void; 
}

const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = ({ isOpen, onClose }) => {
    return (
    // 👈 isOpen Prop을 StyledOverlay에 $isOpen으로 전달
        <StyledOverlay $isOpen={isOpen}>
            <StyledNavList onClick={onClose}> {/* 항목 클릭 시 메뉴 닫기 */}
                <LinkItem theme="catchPhrase" to="/about">소학회 소개</LinkItem>
                <LinkItem theme="catchPhrase" to="/services">서비스 소개</LinkItem>
                <LinkItem theme="catchPhrase" to="/guide">사용안내</LinkItem>
                <LinkItem theme="catchPhrase" to="/notices">공지사항</LinkItem>
                {/* 추가로 로그아웃 버튼이나 다른 모바일 전용 항목을 여기에 배치할 수 있습니다. */}
            </StyledNavList>
        </StyledOverlay>
    );
};
export default MobileMenuOverlay;