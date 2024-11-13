import React, { useState } from 'react';
import { FooterContainer, HelpText, HelpButton } from './styles';
import ModalGuia from '../ModalGuia';
import { ImageData } from '../ModalGuia/types';

interface FooterComponentProps {
  images: ImageData[];
}

const FooterComponent: React.FC<FooterComponentProps> = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHelpClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FooterContainer>
        <HelpText>
          <strong>¿Requiere Ayuda?</strong><br />
          Presione el botón de Ayuda para tener una guía sobre lo que puede realizar en la pantalla
        </HelpText>
        <HelpButton onClick={handleHelpClick}>Ayuda</HelpButton>
      </FooterContainer>
      {isModalOpen && <ModalGuia images={images} onClose={handleCloseModal} />}
    </>
  );
};

export default FooterComponent;
