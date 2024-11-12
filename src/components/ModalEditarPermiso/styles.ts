import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  margin-top: 8px;
`;

export const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  font-size: 16px;
  width: 100%;
  margin-top: 8px;
`;

export const Select = styled.select<{ isOpen?: boolean }>`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  appearance: none;
  background: ${({ isOpen }) =>
    isOpen
      ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M7 10l5 5 5-5z\' fill=\'%23333\'/%3E%3C/svg%3E") no-repeat right 8px center'
      : 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M7 14l5-5 5 5z\' fill=\'%23333\'/%3E%3C/svg%3E") no-repeat right 8px center'};
  background-color: #fff;
  background-size: 16px;
  width: 100%;
  margin-top: 8px;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #555;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 16px;
`;

export const SaveButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #45a049;
  }
`;

export const CancelButton = styled.button`
  background-color: #a00;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #900;
  }
`;
