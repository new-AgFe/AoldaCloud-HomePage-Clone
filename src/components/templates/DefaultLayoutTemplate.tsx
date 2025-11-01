// src/components/templates/DefaultLayoutTemplate.tsx

import React, { useState } from 'react';
import Header from '../organisms/Header'; // 만들어 놓은 Header Organism
import Footer from '../organisms/Footer'; // 만들어 놓은 Footer Organism
import MobileMenuOverlay from '../organisms/MobileMenuOverlay';

// children을 받기 위한 Props 정의
interface DefaultLayoutTemplateProps {
  children: React.ReactNode;
}

const DefaultLayoutTemplate: React.FC<DefaultLayoutTemplateProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    // 페이지 전체 컨테이너
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> 
      
      {/* 1. Header (항상 상단에 고정) */}
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <MobileMenuOverlay isOpen={isMenuOpen} onClose={closeMenu} />
      
      {/* 2. Main Content (페이지 고유 내용이 들어갈 곳) */}
      <main style={{ flexGrow: 1 }}>
        {children} {/* 👈 여기에 HomePage, MemberPage 등의 내용이 들어갑니다 */}
      </main>
      
      {/* 3. Footer (항상 하단에 고정) */}
      <Footer />
      
    </div>
  );
};

export default DefaultLayoutTemplate;