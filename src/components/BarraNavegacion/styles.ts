// styles.ts
import styled from 'styled-components';

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #e0f0ff; /* Fondo claro */
  display: flex;
  justify-content: center;
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const NavButton = styled.button<{ isActive?: boolean }>`
  background-color: ${({ isActive }) => (isActive ? '#1f2a52' : '#2a7b8d')}; /* Color activo e inactivo */
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #1899f9; /* Cambia a azul oscuro en hover */
  }
`;
