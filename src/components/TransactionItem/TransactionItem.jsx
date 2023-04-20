import PropTypes from 'prop-types';
import { TableData } from './TransactionItem.styled';

export const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <TableData type>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </>
  );
};

TransactionItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
