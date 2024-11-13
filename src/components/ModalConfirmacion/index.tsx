// components/ConfirmModal/index.tsx
import React, { useState } from "react";
import { ModalOverlay, ModalContent, ModalMessage, ButtonContainer, ConfirmButton, CancelButton, AcceptButton } from "./styles";
import { ConfirmModalProps } from "./types";

const ConfirmModal: React.FC<ConfirmModalProps> = ({ message, onConfirm, onCancel }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setIsConfirmed(true); // Cambia el estado a confirmado para mostrar el mensaje informativo
  };

  const handleClose = () => {
    setIsConfirmed(false);
    onCancel();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        {isConfirmed ? (
          <>
            <ModalMessage>Solicitud Recibida y notificada al área de gestión humana y a su jefe</ModalMessage>
            <ButtonContainer style={{ justifyContent: "center" }}>
              <AcceptButton onClick={handleClose}>Aceptar</AcceptButton>
            </ButtonContainer>
          </>
        ) : (
          <>
            <ModalMessage>{message}</ModalMessage>
            <ButtonContainer style={{ justifyContent: "space-around" }}>
              <ConfirmButton onClick={handleConfirm}>Aceptar</ConfirmButton>
              <CancelButton onClick={onCancel}>Cancelar</CancelButton>
            </ButtonContainer>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmModal;
