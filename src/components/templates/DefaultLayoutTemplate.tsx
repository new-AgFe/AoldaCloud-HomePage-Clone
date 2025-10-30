// src/components/templates/DefaultLayoutTemplate.tsx

import React from 'react';
import Header from '../organisms/Header'; // 만들어 놓은 Header Organism
import Footer from '../organisms/Footer'; // 만들어 놓은 Footer Organism

// children을 받기 위한 Props 정의
interface DefaultLayoutTemplateProps {
  children: React.ReactNode;
}

const DefaultLayoutTemplate: React.FC<DefaultLayoutTemplateProps> = ({ children }) => {
  return (
    // 페이지 전체 컨테이너
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> 
      
      {/* 1. Header (항상 상단에 고정) */}
      <Header />
      
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