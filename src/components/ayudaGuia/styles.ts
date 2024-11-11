// styles.ts
import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px; /* Aumenta el padding para hacerlo más grande */
  background-color: #2C3340; /* Color de fondo oscuro */
  color: #FFFFFF; /* Color de texto blanco */
`;

export const HelpText = styled.div`
  font-size: 1.2em; /* Aumenta el tamaño del texto */
  line-height: 1.8; /* Ajusta el espaciado de línea */
`;

export const HelpButton = styled.button`
  background-color: #1E90FF; /* Color del botón */
  color: #FFFFFF; /* Color del texto del botón */
  font-size: 1.2em; /* Aumenta el tamaño del texto del botón */
  padding: 15px 30px; /* Aumenta el tamaño del botón */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1C86EE; /* Color en hover */
  }
`;
