// src/components/molecules/NavItems.tsx

import Button from '../atoms/Button';
import React from 'react';
import { StyledNav } from './NavItems.styles';

interface NavItemsProps {
  onNavItemClick: (item: string) => void;
}

const NavItems: React.FC<NavItemsProps> = ({ onNavItemClick }) => {
  return (
    <StyledNav>
      <Button theme="catchPhrase" onClick={() => onNavItemClick('about')}>소학회 소개</Button>
      <Button theme="catchPhrase" onClick={() => onNavItemClick('services')}>서비스 소개</Button>
      <Button theme="catchPhrase" onClick={() => onNavItemClick('guide')}>사용안내</Button>
      <Button theme="catchPhrase" onClick={() => onNavItemClick('notices')}>공지사항</Button>
    </StyledNav>
  );
};

export default NavItems;