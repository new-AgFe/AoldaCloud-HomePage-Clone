// src/hooks/useScrollDetection.ts

import { useState, useEffect } from 'react';

const useScrollDetection = (threshold = 30) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 윈도우의 Y축 스크롤 위치가 'threshold' 값보다 크면 true
      const scrolled = window.scrollY > threshold;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);
    
    // 컴포넌트 언마운트 시 리스너 제거 (메모리 누수 방지)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled, threshold]);

  return isScrolled;
};

export default useScrollDetection;