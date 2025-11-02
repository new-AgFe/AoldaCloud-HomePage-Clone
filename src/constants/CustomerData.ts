// src/constants/customerData.ts

export interface CustomerData {
    id: number;
    imageSrc: string;
    name: string;
    description: string;
    duration: string;
}

export const CUSTOMER_LIST: CustomerData[] = [
    {
        id: 1,
        imageSrc: '#',
        name: '아주대학교 총학생회',
        description: 'description',
        duration: '2023.09 ~ 현재',
    },
    {
        id: 2,
        imageSrc: '#',
        name: 'WVR',
        description: 'description',
        duration: '2024.03 ~ 2024.09',
    },
    {
        id: 3,
        imageSrc: '#',
        name: 'GKV',
        description: 'description',
        duration: '2024.03 ~ 2024.09',
    },
    {
        id: 4,
        imageSrc: '#',
        name: 'Dash',
        description: 'description',
        duration: '2024.03 ~ 2024.09',
    },
    {
        id: 5,
        imageSrc: '#',
        name: 'A.mate',
        description: 'description',
        duration: '2024.03 ~ 2024.09',
    },
    {
        id: 6,
        imageSrc: '#',
        name: '오작교',
        description: 'description',
        duration: '2024.03 ~ 2024.09',
    },
    
];

export const LIST_TOP = CUSTOMER_LIST.slice(0, CUSTOMER_LIST.length / 2);
export const LIST_BOTTOM = CUSTOMER_LIST.slice(CUSTOMER_LIST.length / 2);