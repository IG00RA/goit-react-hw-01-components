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
      <OnlineCheck isOnline={isOnline}></OnlineCheck>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};
