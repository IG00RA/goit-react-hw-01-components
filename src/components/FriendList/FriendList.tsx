import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Friend, FriendsList } from './FriendList.styled';
import { Friends } from '../../types/dataBaseTypes';
import { FC } from 'react';
interface FriendListProps {
  friends: Friends[];
}

export const FriendList: FC<FriendListProps> = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <Friend key={friend.id}>
          <FriendListItem item={friend} />
        </Friend>
      ))}
    </FriendsList>
  );
};