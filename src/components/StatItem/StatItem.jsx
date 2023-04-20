import PropTypes from 'prop-types';
import { Data } from './StatItem.styled';

export const StatItem = ({ item: { label, percentage } }) => {
  return (
    <>
      <Data type="label">{label}</Data>
      <Data type="percentage">{percentage}%</Data>
    </>
  );
};

StatItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
