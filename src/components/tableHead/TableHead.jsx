import { RowHead, CellHead } from './TableHead.styled';
export const TableHead = () => {
  return (
    <thead>
      <RowHead>
        <CellHead>Type</CellHead>
        <CellHead>Amount</CellHead>
        <CellHead>Currency</CellHead>
      </RowHead>
    </thead>
  );
};
