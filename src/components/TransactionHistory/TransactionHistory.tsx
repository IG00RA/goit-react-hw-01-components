import { Transactions } from '../../types/dataBaseTypes';
import { TransactionItem } from '../TransactionItem/TransactionItem';
import { Table, TableHead, TableRow } from './TransactionHistory.styled';

interface TransactionHistoryProps {
  items: Transactions[];
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  items,
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TransactionItem item={item} />
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
