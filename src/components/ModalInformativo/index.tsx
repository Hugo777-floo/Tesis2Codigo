// components/InfoModal/index.tsx
import React from "react";
import { ModalOverlay, ModalContent, ModalMessage, ButtonContainer, AcceptButton } from "./styles";
import { InfoModalProps } from "./types";

const InfoModal: React.FC<InfoModalProps> = ({ message, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalMessage>{message}</ModalMessage>
        <ButtonContainer>
          <AcceptButton onClick={onClose}>Aceptar</AcceptButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default InfoModal;
