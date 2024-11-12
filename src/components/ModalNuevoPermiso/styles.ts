import styled, { css } from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
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
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

export const Select = styled.select<{ isOpen?: boolean }>`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  appearance: none;
  background: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNjY2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KPHBhdGggZD0iTTEyIDZsLTQgNC00LTR6Ii8+Cjwvc3ZnPg==')
    no-repeat right 10px center;
  background-size: 12px;
  
  ${({ isOpen }) =>
    isOpen &&
    css`
      background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNjY2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KPHBhdGggZD0iTTEyIDExbC00LTQtNCA0eiIvPgo8L3N2Zz4=');
    `}
`;
