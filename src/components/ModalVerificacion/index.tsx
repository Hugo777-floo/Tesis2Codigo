// ModalVerification/index.tsx
import React, { useState } from "react";
import { ModalContainer, Title, Message, CodeInput, Button, Icon, CloseIcon } from "./styles";
import { ModalState } from "./types";

interface ModalVerificationProps {
  onClose: () => void;
}

const ModalVerification: React.FC<ModalVerificationProps> = ({ onClose }) => {
  const [inputCode, setInputCode] = useState("");
  const [modalState, setModalState] = useState<ModalState>("initial");

  const handleSubmit = () => {
    if (inputCode === "777") {
      setModalState("success");
    } else {
      setModalState("error");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCode(e.target.value);
  };

  const renderContent = () => {
    switch (modalState) {
      case "initial":
        return (
          <>
            <Icon>ℹ️</Icon>
            <Title>Confirmación</Title>
            <Message>Se le ha enviado un código de verificación al correo electrónico registrado</Message>
            <CodeInput type="text" value={inputCode} onChange={handleInputChange} />
            <Button color="blue" onClick={() => onClose()}>Cancelar</Button>
            <Button color="blue" onClick={handleSubmit}>Enviar</Button>
          </>
        );
      case "success":
        return (
          <>
            <Icon>✔️</Icon>
            <Title>Correcto</Title>
            <Message>Código Correcto, información enviada a revisión por el área de Gestión Humana</Message>
            <CodeInput type="text" value={inputCode} readOnly />
            <Button color="green" onClick={() => onClose()}>Aceptar</Button>
          </>
        );
      case "error":
        return (
          <>
            <Icon>❗</Icon>
            <Title>Incorrecto</Title>
            <Message>Código Incorrecto, ingrese de nuevo el código de confirmación</Message>
            <CodeInput type="text" value={inputCode} onChange={handleInputChange} style={{ color: "red" }} />
            <Button color="blue" onClick={() => onClose()}>Cancelar</Button>
            <Button color="red" onClick={handleSubmit}>Enviar</Button>
          </>
        );
    }
  };

  return (
    <ModalContainer>
      <CloseIcon onClick={() => onClose()}>✖️</CloseIcon>
      {renderContent()}
    </ModalContainer>
  );
};

export default ModalVerification;

