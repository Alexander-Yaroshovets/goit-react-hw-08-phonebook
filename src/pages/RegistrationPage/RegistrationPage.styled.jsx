import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  margin: 40px auto 0;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
`;
export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const LableText = styled.span`
  display: block;
  margin: 0 0 10px;
  color: #22d93a;
`;

export const LableInfo = styled.span`
  font-size: 12px;
  color: #555;
`;

export const Input = styled.input`
  display: block;
  width: 285px;
  height: 20px;
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover,
  &:focus {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    border: 1px solid aquamarine;
  }
`;

export const FormButton = styled.button`
  display: block;
  padding: 5px 15px;
  margin: 15px auto 0;
  border: 1px solid blueviolet;
  border-radius: 2px;

  border-radius: 5px;
  font-weight: 700;
  color: #555;
  cursor: pointer;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: aquamarine;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;
