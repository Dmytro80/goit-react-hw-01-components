import { TableHead } from '../tableHead/TableHead';
import { TableBody } from '../tableBody/TableBody';
import { TransactionTable } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead />
      <TableBody items={items} />
    </TransactionTable>
  );
};
