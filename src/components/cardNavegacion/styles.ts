// styles.ts
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 250px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  margin: 10px; 
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 120px; 
  object-fit: contain; 
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  color: #1f2a52;
  margin: 0;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #5a5a5a;
  margin: 10px 0;
  line-height: 1.5;
  height: 100px; 
  overflow: hidden; 
`;

export const CardButton = styled.button`
  padding: 8px 16px;
  background-color: #2a7b8d;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: auto; 

  &:hover {
    background-color: #1f2a52;
  }
`;
