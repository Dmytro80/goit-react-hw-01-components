import { TableHead } from '../tableHead/TableHead';
import { TableBody } from '../tableBody/TableBody';

export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <TableHead />
      <TableBody items={items} />
    </table>
  );
};
