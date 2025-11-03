// src/components/organisms/Header.tsx
import LinkItem from '../atoms/LinkItem';
import React from 'react';
import useScrollDetection from '../../hooks/useScrollDetection';
import { StyledHeader } from './Header.styles';
import NavItems from '../molecules/NavItems';
import Image from '../atoms/Image';
import Logo from '../../assets/Logo.svg';
import Button from '../atoms/Button';

interface HeaderProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  // 👈 훅을 사용하여 스크롤 상태 가져오기 (30px 스크롤되면 true 반환)
  const isScrolled = useScrollDetection(30);

  return (
    <StyledHeader $isScrolled={isScrolled}>
        <div className="logo-area">
          <Image src={Logo} alt="로고" height="100%" />
        </div>

        <div className='center-menu'>
          <NavItems />
        </div>

        <div className="right-button">
          <LinkItem theme="primary" to='/console'>콘솔로 이동 →</LinkItem>
        </div>

        <div className="hamburger-menu">
          <Button theme="ghost" onClick={toggleMenu}>
            {isMenuOpen ? 'X' : '☰'} 
          </Button>
        </div>
    </StyledHeader>
  );
};

export default Header;