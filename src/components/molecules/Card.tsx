// src/components/molecules/Card.tsx

import React from 'react';
import { StyledCard, CardContent } from './Card.styles';
import Typography from '../atoms/Typography';
import Image from '../atoms/Image';

export interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    $color?: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, $color }) => {
    return (
        <StyledCard>
            <Image src={imageSrc} alt={title} width="5rem" height="auto" />
            <CardContent>
                <Typography variant="h3" color={$color}>{title}</Typography>
                <Typography variant="caption" color='#666'>{description}</Typography>
            </CardContent>
        </StyledCard>
    );
};

export default Card;