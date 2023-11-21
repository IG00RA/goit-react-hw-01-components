import { Data } from '../../types/dataBaseTypes';
import { UserData } from './StatItem.styled';

interface StatItemProps {
  item: Data;
}

export const StatItem: React.FC<StatItemProps> = ({
  item: { label, percentage },
}) => {
  return (
    <>
      <UserData type="label">{label}</UserData>
      <UserData type="percentage">{percentage}%</UserData>
    </>
  );
};
