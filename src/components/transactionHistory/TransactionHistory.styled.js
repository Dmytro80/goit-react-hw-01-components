import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin-right: auto;
  margin-left: auto;
  background-color: white;
  width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  border-collapse: collapse;
`;
export const RowHead = styled.tr`
  background-color: rgb(0, 174, 255);
  color: white;
  text-transform: uppercase;
  font-size: 16px;
`;

export const CellHead = styled.th`
  padding-top: 8px;
  padding-bottom: 8px;
  :not(:last-child) {
    border-right: 1px solid #d7d7d7;
`;
export const CellBody = styled.td`
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 16px;
  text-align: center;
  color: grey;
  text-transform: capitalize;
  :not(:last-child) {
    border-right: 1px solid #d7d7d7;
  }
`;
