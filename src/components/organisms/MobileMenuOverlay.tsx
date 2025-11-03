// src/components/organisms/MobileMenuOverlay.tsx

import React from 'react';
import { StyledOverlay, StyledNavList } from './MobileMenuOverlay.styles';
import LinkItem from '../atoms/LinkItem';

interface MobileMenuOverlayProps {
    isOpen: boolean;
    onClose: () => void; 
}

const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = ({ isOpen, onClose }) => {
    return (
        <StyledOverlay $isOpen={isOpen}>
            <StyledNavList onClick={onClose}>
                <LinkItem theme="catchPhrase" to="/about">소학회 소개</LinkItem>
                <LinkItem theme="catchPhrase" to="/services">서비스 소개</LinkItem>
                <LinkItem theme="catchPhrase" to="/guide">사용안내</LinkItem>
                <LinkItem theme="catchPhrase" to="/notices">공지사항</LinkItem>
            </StyledNavList>
        </StyledOverlay>
    );
};
export default MobileMenuOverlay;