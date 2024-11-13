// ModalVerification/styles.ts
import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); // Color negro semitransparente
  z-index: 999; // Asegura que esté debajo del modal
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 1000; // Asegura que el modal esté encima del Backdrop
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
`;

// Resto de los estilos del modal como Title, Message, Button, etc.
export const Title = styled.h2`
  color: #1a1a1a;
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
`;

export const Message = styled.p`
  color: #333;
  text-align: center;
  font-size: 1rem;
  margin-top: 10px;
  line-height: 1.5;
`;

export const CodeInput = styled.input`
  margin: 20px 0;
  padding: 10px;
  font-size: 1.1rem;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;

export const Button = styled.button<{ color: string }>`
  margin: 5px;
  padding: 10px 20px;
  background-color: ${(props) => (props.color === "blue" ? "#007bff" : props.color === "green" ? "#28a745" : "#dc3545")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  width: 100px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Icon = styled.div`
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 10px;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  color: #aaa;
  &:hover {
    color: #333;
  }
`;
