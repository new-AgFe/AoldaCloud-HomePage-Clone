// src/components/organisms/Header.tsx
import Button from '../atoms/Button';
import React from 'react';
import useScrollDetection from '../../hooks/useScrollDetection';
import { StyledHeader } from './Header.styles';
import NavItems from '../molecules/NavItems';
import Image from '../atoms/Image';
import Logo from '../../assets/Logo.svg';

const Header: React.FC = () => {
  // 👈 훅을 사용하여 스크롤 상태 가져오기 (30px 스크롤되면 true 반환)
  const isScrolled = useScrollDetection(30);

  return (
    // 👈 Styled Component에 $isScrolled Props 전달
    <StyledHeader $isScrolled={isScrolled}>
      {/* 👈 헤더 내부의 모든 콘텐츠를 StyledContainer로 감쌉니다. */}
        <div className="logo-area">
          <Image src={Logo} alt="로고" height="100%" />
        </div>

        <NavItems onNavItemClick={(item) => console.log(item)} />

        <div className="right-button">
          <Button theme="primary" onClick={() => {}}>콘솔로 이동 →</Button>
        </div>
    </StyledHeader>
  );
};

export default Header;