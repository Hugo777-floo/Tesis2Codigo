// components/Notification/styles.ts
import styled from 'styled-components';

export const NotificationContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #2a7b8d;
  background-color: #f5f5f5; 
  padding: 10px 14px; 
  border-radius: 6px; 
  width: 300px; 
  font-size: 0.9em; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
  margin-right: 10px; 
`;

export const InfoIcon = styled.div`
  font-size: 18px; 
  margin-right: 8px;
`;

export const CloseIcon = styled.div`
  font-size: 16px; 
  cursor: pointer;
  margin-left: auto;
`;

export const Message = styled.div`
  color: #000;
  font-size: 0.9em; 
  line-height: 1.4; 
  
  span {
    display: block;
    margin-top: 4px;
  }
`;
