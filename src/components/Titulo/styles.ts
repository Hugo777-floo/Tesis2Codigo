import styled from 'styled-components';

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 2.5em;
  font-weight: bold;
  margin: 80px 0 40px 0; /* Incrementa el margen superior */
  color: #4A90E2; /* Cambia este color a tu preferencia */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  &:after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: #4A90E2;
    margin: 10px auto;
    border-radius: 2px;
  }
`;
