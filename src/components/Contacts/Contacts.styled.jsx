import styled from 'styled-components';

export const ContactButton = styled.button`
  padding: 5px 30px;
  border: 1px solid blueviolet;
  border-radius: 5px;
  background-color: aquamarine;
  cursor: pointer;
  &:hover {
    background-color: #8e8eea;
  }
`;

export const ContactItem = styled.li`
  width: 50%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  border: 1px dashed blue;
  padding: 5px;
`;

export const Transaction = styled.table`
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
  font-size: 14px;
  border-radius: 10px;
  border-spacing: 0;
  text-align: center;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const TransactionHead = styled.thead`
  background: #bcebdd;
  color: white;
  text-shadow: 0 1px 1px #2d2020;
`;

export const TransactionBody = styled.tbody`
  background: #d4f2af;
  font-size: 14px;
  border: 1px solid black;
`;

export const Table = styled.td`
  padding: 10px;
  border: 1px solid green;
`;

export const TableHead = styled.th`
  padding: 20px;
  border: 2px solid blueviolet;
  border-radius: 10%;
`;

export const InfoText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: tomato;
`;
