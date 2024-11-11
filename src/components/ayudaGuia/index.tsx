// FooterComponent.tsx
import React from 'react';
import { FooterContainer, HelpText, HelpButton } from './styles';

const FooterComponent: React.FC = () => {
  const handleHelpClick = () => {
    alert("Aquí puedes mostrar una guía de ayuda.");
  };

  return (
    <FooterContainer>
      <HelpText>
        <strong>¿Requiere Ayuda?</strong><br />
        Presione el botón de Ayuda para tener una guía sobre lo que puede realizar en la pantalla
      </HelpText>
      <HelpButton onClick={handleHelpClick}>Ayuda</HelpButton>
    </FooterContainer>
  );
};

export default FooterComponent;