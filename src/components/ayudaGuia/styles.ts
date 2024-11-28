// styles.ts
import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px; 
  background-color: #2C3340; 
  color: #FFFFFF; 
`;

export const HelpText = styled.div`
  font-size: 1.2em; 
  line-height: 1.8; 
`;

export const HelpButton = styled.button`
  background-color: #1E90FF; /
  color: #FFFFFF; 
  font-size: 1.2em; 
  padding: 15px 30px; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1C86EE; 
  }
`;
