import { Data } from './StatItem.styled';

export const StatItem = ({ item: { label, percentage } }) => {
  return (
    <>
      <Data type="label">{label}</Data>
      <Data type="percentage">{percentage}%</Data>
    </>
  );
};
