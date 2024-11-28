import styled from 'styled-components';
import { Status } from './types';

interface ContainerProps {
  status: Status;
}

interface StatusTextProps {
  status: Status;
}

interface ButtonProps {
  color: 'blue' | 'red';
}

const statusColors = {
  Aprobado: '#00A000',
  Rechazado: '#D80000',
  'Pendiente de Aprobación': '#FFA500',
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center; /* Centra verticalmente los elementos */
  gap: 16px; /* Espacio entre el contenedor y los botones */
`;

export const Container = styled.div<ContainerProps>`
  border: 2px solid ${({ status }) => statusColors[status]};
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 320px; 
  min-height: 150px; 
  justify-content: space-between; 
`;


export const StatusText = styled.h2<StatusTextProps>`
  color: ${({ status }) => statusColors[status]};
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 8px 0;
`;

export const InfoText = styled.p`
  color: #333;
  font-size: 16px;
  margin: 4px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row; 
  gap: 8px; 
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${({ color }) => (color === 'blue' ? '#007bff' : '#d9534f')};
  color: #fff;
  border: none;
  padding: 8px 16px; 
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  width: 110px; 

  &:hover {
    background-color: ${({ color }) => (color === 'blue' ? '#0056b3' : '#c9302c')};
  }
`;

