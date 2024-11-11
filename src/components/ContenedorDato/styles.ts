// TabContainer/styles.ts
import styled from "styled-components";

export const TabContainerWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 15px 10px;
  font-size: 1.2em;
  border: none;
  border-right: 1px solid white; /* Añade un borde derecho entre las pestañas */
  cursor: pointer;
  font-weight: bold;
  color: white;
  background-color: ${({ isActive }) => (isActive ? "#1f2a52" : "#2a7b8d")};

  &:last-child {
    border-right: none; /* Quita el borde derecho en el último elemento */
  }

  &:hover {
    background-color: #1899f9;
  }
`;

