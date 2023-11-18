import { FriendName, OnlieCheck } from './FriendListItem.styled';

export const FriendListItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <>
      <OnlieCheck isOnline={isOnline}></OnlieCheck>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};
