import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 800px; /* Cambia este valor para hacerlo más ancho */
  max-width: 90%;
  max-height: 90%; /* Limita la altura máxima para evitar que se desborde */
  text-align: center;
  overflow-y: auto; /* Permite desplazamiento si el contenido excede la altura */
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

export const TextContainer = styled.div`
  margin-top: 15px;
  font-size: 16px;
  color: #333;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const PageButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 16px;
`;
