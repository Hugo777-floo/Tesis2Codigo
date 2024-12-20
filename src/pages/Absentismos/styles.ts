import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 24px;
  max-width: 800px;
  margin: 60px auto 0 auto; 
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  margin-bottom: 24px;
  width: 100%; 
`;


export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0;
  margin-right: 32px;
  flex-grow: 1; 
  white-space: nowrap; 
  overflow: visible; 
`;


export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;


export const Button = styled.button`
  background-color: #004080;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  min-width: 180px; 
  text-align: center;

  &:hover {
    background-color: #003366;
  }
`;

