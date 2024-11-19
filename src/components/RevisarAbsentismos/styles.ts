import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: 60px; /* Ajusta según la altura del encabezado superior */
  z-index: 900; /* Menor prioridad que el encabezado superior */
  background-color: #f9f9f9; /* Fondo para que sea visible */
  padding: 20px; /* Más espacio para separar contenido */
  display: flex;
  flex-direction: column; /* Alinea el contenido en una columna */
  align-items: center; /* Centra los elementos horizontalmente */
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1); /* Opcional: sombra */
  gap: 20px; /* Espaciado uniforme entre el título y los botones */
`;


export const Title = styled.h1`
  font-size: 32px;
  color: #333;
  flex-grow: 1; /* Permite que el título ocupe el espacio disponible */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Centra los botones horizontalmente */
  align-items: center; /* Alinea los botones verticalmente */
  gap: 20px; /* Espacio uniforme entre los botones */
  flex-wrap: nowrap; /* Asegura que los botones no se distribuyan en varias filas */
  margin-top: 20px; /* Espacio entre el título y los botones */
`;



export const Button = styled.button`
  padding: 0; /* Elimina el padding interno */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  color: white;
  background-color: #007bff;
  text-align: center; /* Centra el texto dentro del botón */
  width: 150px; /* Define un ancho fijo */
  height: 60px; /* Define un alto fijo */
  display: flex; /* Centra el contenido */
  align-items: center; /* Centra el texto verticalmente */
  justify-content: center; /* Centra el texto horizontalmente */
  &:hover {
    opacity: 0.8;
  }
`;


export const SolicitudContainer = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SolicitudInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;
