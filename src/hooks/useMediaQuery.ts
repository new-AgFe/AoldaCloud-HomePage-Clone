// src/hooks/useMediaQuery.ts

import { useState, useEffect } from 'react';
import debounce from '../utils/performance'; // 👈 debounce 헬퍼 함수 경로 확인

const TABLET_BREAKPOINT = 768; 
const DEBOUNCE_DELAY_MS = 300; // 0.3초 지연 (성능 최적화 지점)

const useMediaQuery = () => {
    // 1. 상태: 현재 화면 너비가 기준점 이하(모바일/태블릿)인지 저장
    const [isTablet, setIsTablet] = useState(window.innerWidth <= TABLET_BREAKPOINT);

    useEffect(() => {
        // 2. 상태 업데이트 로직 (디바운스 적용)
        const handleResize = () => {
            // 윈도우 너비와 기준점 비교
            setIsTablet(window.innerWidth <= TABLET_BREAKPOINT);
        };

        // 🚨 3. 디바운스 적용: 리사이즈 이벤트가 멈춘 후 300ms 뒤에만 실행
        const debouncedHandleResize = debounce(handleResize, DEBOUNCE_DELAY_MS);

        // 4. 이벤트 리스너 등록
        window.addEventListener('resize', debouncedHandleResize as any);
        
        // 💡 마운트 시 초기 상태 설정 (필수!)
        handleResize(); 

        return () => {
            // 5. 클린업: 컴포넌트 언마운트 시 리스너 제거
            window.removeEventListener('resize', debouncedHandleResize as any);
        
            // (선택) 디바운스된 타이머 정리 (cancel 기능이 없다면 이 줄은 생략 가능)
            // (debouncedHandleResize as any).cancel?.();
        };
    }, []); // 의존성 배열 없음: 훅이 마운트될 때 한 번만 등록 및 정리

    return isTablet;
};

export default useMediaQuery;