import styled from 'styled-components';

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
