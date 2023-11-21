import { FriendName, OnlineCheck } from './FriendListItem.styled';
import { Friends } from '../../types/dataBaseTypes';

interface FriendListItemProps {
  item: Friends;
}

export const FriendListItem: React.FC<FriendListItemProps> = ({
  item: { avatar, name, isOnline },
}) => {
  return (
    <>
      <OnlineCheck isonline={isOnline.toString()}></OnlineCheck>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};
