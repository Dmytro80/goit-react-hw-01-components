import styled from 'styled-components';

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
