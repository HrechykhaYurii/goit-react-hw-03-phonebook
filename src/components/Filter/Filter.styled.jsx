import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 30px auto;
  
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
  color: #858585;
`;

export const Input = styled.input`
  padding: 5px 10px;
  width: 100%;
  font-size: 24px;
  color: #282828;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.3);
  :focus {
    outline: none;
}
`;