import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: #007bff;

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