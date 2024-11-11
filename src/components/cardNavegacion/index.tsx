// Card.tsx
import React from 'react';
import { CardContainer, CardImage, CardTitle, CardDescription, CardButton } from './styles';
import { CardProps } from './types';

const Card: React.FC<CardProps> = ({ imageSrc, title, description, buttonText, onButtonClick }) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton onClick={onButtonClick}>{buttonText}</CardButton>
    </CardContainer>
  );
};

export default Card;
