// styles.ts
import styled from 'styled-components';

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Asegura que esté encima de otros elementos */
  background-color: #e0f0ff; /* Fondo para el encabezado */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Agrega una sombra */
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const NavButton = styled.button<{ isActive?: boolean }>`
  background-color: ${({ isActive }) => (isActive ? '#1f2a52' : '#2a7b8d')};
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;

  /* Dimensiones mínimas */
  min-width: 140px;
  min-height: 40px;
  text-align: center;

  &:hover {
    background-color: #1899f9;
  }
`;

