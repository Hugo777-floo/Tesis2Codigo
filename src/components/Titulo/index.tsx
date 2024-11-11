import React from 'react';
import { StyledTitle } from './styles';
import { TitleComponentProps } from './types';

const TitleComponent: React.FC<TitleComponentProps> = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default TitleComponent;