// pages/MisDatos/styles.ts
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  padding-top: 40px;
  background-color: #f9f9f9;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  background-color: #2a7b8d;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #1f5d70;
  }
`;

export const AceptarButton = styled.button`
  background-color: #28a745; /* Verde */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 8px; /* Espacio reducido entre los botones */

  &:hover {
    background-color: #218838;
  }
`;

export const CancelarButton = styled.button`
  background-color: #a71d1d; /* Rojo oscuro */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #841313;
  }
`;


export const ButtonGroup = styled.div`
  display: flex;
  gap: 0; /* Elimina el espacio entre los botones */
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Cambiamos a 3 columnas */
  gap: 15px;
  margin-top: 20px;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.9em;
  color: #888;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #e6e6e6;
  color: #555;
  font-size: 0.9em;

  /* Estilos para ocultar las flechas en campos de número */
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const SelectContainer  = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 100%;

  select {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #e6e6e6;
    color: #555;
    font-size: 0.9em;
    appearance: none;
    width: 100%;

    background-image: ${({ isOpen }) =>
      isOpen
        ? "url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 4 5\"><path fill=\"gray\" d=\"M2 2L0 0h4z\"/></svg>')"
        : "url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 4 5\"><path fill=\"gray\" d=\"M2 0L0 2h4z\"/></svg>')"};
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 10px;
  }

  select:focus {
    outline: none;
    border-color: #2a7b8d;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.1em;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
  margin-bottom: 10px;
`;


export const ChildContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 5px;
  margin-bottom: 16px;
  background-color: #f9f9f9;
`;

// Contenedor para el título "Hijos" y el botón de añadir
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

// Botón Añadir
export const AddButton = styled.button`
  background-color: #1d4ed8; /* Azul */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 0.9em;
  cursor: pointer;
  margin-left: 10px; /* Espacio entre el título y el botón */

  &:hover {
    background-color: #2563eb; /* Azul más claro */
  }

  &:focus {
    outline: none;
  }
`;

export const DeleteButton = styled.button`
  background-color: #e3342f; /* Rojo */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 0.8em;
  cursor: pointer;
  margin-top: 10px; /* Espacio en la parte superior */

  &:hover {
    background-color: #cc1f1a; /* Rojo más oscuro */
  }

  &:focus {
    outline: none;
  }
`;

export const SmallTitle = styled.h2`
  font-size: 3em; /* Ajusta este tamaño según tus necesidades */
  font-weight: bold;
  color: #2d3e85; /* Cambia el color si es necesario */
  margin-bottom: 20px; /* Espaciado inferior */
  text-align: center; /* Centra el texto si aplica */
`;
