import { Transactions } from '../../types/dataBaseTypes';
import { TableData } from './TransactionItem.styled';

interface TransactionItemProps {
  item: Transactions;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
  item: { type, amount, currency },
}) => {
  return (
    <>
      <TableData type="">{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </>
  );
};
