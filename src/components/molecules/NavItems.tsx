// src/components/molecules/NavItems.tsx

import LinkItem from '../atoms/LinkItem';
import React from 'react';
import { StyledNav } from './NavItems.styles';


const NavItems: React.FC = () => {
  return (
    <StyledNav>
      <LinkItem theme="catchPhrase" to='/about'>소학회 소개</LinkItem>
      <LinkItem theme="catchPhrase" to='/services'>서비스 소개</LinkItem>
      <LinkItem theme="catchPhrase" to='/guide'>사용안내</LinkItem>
      <LinkItem theme="catchPhrase" to='/notices'>공지사항</LinkItem>
    </StyledNav>
  );
};

export default NavItems;