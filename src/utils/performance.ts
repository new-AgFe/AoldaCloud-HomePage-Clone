// src/utils/performance.ts

const debounce = (func: Function, delay: number) => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    
    // 'this'와 매개변수를 정확히 전달하기 위해 function을 사용합니다.
    return function(this: any, ...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

export default debounce;