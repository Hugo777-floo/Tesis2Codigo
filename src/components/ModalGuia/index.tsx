import React, { useState } from 'react';
import { ModalOverlay, ModalContent, Image, TextContainer, Navigation, PageButton } from './styles';
import { ModalProps } from './types';

const ModalGuia: React.FC<ModalProps> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Image src={images[currentIndex].src} alt={images[currentIndex].alt} />
        <TextContainer>{images[currentIndex].description}</TextContainer>
        <Navigation>
          <PageButton onClick={handlePrevious}>&lt; Anterior</PageButton>
          <span>{currentIndex + 1} / {images.length}</span>
          <PageButton onClick={handleNext}>Siguiente &gt;</PageButton>
        </Navigation>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalGuia;
