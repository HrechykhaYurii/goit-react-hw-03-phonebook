import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Container = styled(Form)`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  max-width: 90%;
`;

export const Wrapper = styled.div`
  margin-bottom: 30px;
  max-width: 100%;
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

export const Input = styled(Field)`
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

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: 7px;
  color: red;
`;

export const SubmitButton = styled.button`
  padding: 10px 25px;
  font-size: 24px;
  font-weight: 500;
  color: #6a9bd8;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #6a9bd8;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    color: #ebf5fc;
    background-color: #6a9bd8;
  }
`;