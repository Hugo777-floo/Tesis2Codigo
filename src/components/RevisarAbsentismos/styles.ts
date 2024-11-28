import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: 60px; 
  z-index: 900; 
  background-color: #f9f9f9; 
  padding: 20px; 
  display: flex;
  flex-direction: column; 
  align-items: center; 
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1); 
  gap: 20px; 
`;


export const Title = styled.h1`
  font-size: 32px;
  color: #333;
  flex-grow: 1; 
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 20px; 
  flex-wrap: nowrap; 
  margin-top: 20px; 
`;



export const Button = styled.button`
  padding: 0; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  color: white;
  background-color: #007bff;
  text-align: center; 
  width: 150px; 
  height: 60px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
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
