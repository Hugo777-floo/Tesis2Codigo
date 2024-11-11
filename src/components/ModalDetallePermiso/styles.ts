import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 16px;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.span`
  font-weight: bold;
  color: #555;
`;

export const Value = styled.span`
  color: #333;
`;

export const TextArea = styled.div`
  background-color: #f9f9f9;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  min-height: 60px;
  max-height: 200px;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  background-color: #a00;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 16px;
  align-self: center;

  &:hover {
    background-color: #900;
  }
`;

