import styled from 'styled-components';

export const Container = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

export const UserInfoTitle = styled.span``;

export const Button = styled.button`
  margin-left: 50px;
  display: inline-block;
  background-color: transparent;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  border: none;
  cursor: pointer;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: red;
  }
`;
