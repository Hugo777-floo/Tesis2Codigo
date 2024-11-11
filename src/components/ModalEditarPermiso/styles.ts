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

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #555;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
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

export const EditButton = styled.button`
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
