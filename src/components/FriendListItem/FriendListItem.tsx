import PropTypes from 'prop-types';
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

FriendListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
