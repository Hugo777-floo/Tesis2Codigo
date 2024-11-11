// components/Notification/styles.ts
import styled from 'styled-components';

export const NotificationContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #2a7b8d; /* Color del borde */
  background-color: #f5f5f5; /* Fondo gris claro */
  padding: 10px 14px; /* Padding aumentado para un diseño más espacioso */
  border-radius: 6px; /* Borde redondeado */
  width: 300px; /* Ancho fijo aumentado */
  font-size: 0.9em; /* Tamaño de fuente más grande */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para un diseño elevado */
  margin-right: 10px; /* Espacio a la derecha para separarlo del botón */
`;

export const InfoIcon = styled.div`
  font-size: 18px; /* Tamaño del ícono aumentado */
  margin-right: 8px;
`;

export const CloseIcon = styled.div`
  font-size: 16px; /* Tamaño del ícono de cierre aumentado */
  cursor: pointer;
  margin-left: auto;
`;

export const Message = styled.div`
  color: #000;
  font-size: 0.9em; /* Tamaño de fuente del mensaje aumentado */
  line-height: 1.4; /* Altura de línea ajustada para mejorar legibilidad */
  
  span {
    display: block;
    margin-top: 4px; /* Espacio adicional entre líneas */
  }
`;
