import PropTypes from 'prop-types';
import {
  Avatar,
  ProfCard,
  StatItem,
  UserInfo,
  UserName,
  UserStat,
  UserStats,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfCard>
      <UserInfo>
        <Avatar>
          <img src={avatar} alt="User avatar" />
        </Avatar>
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </UserInfo>

      <UserStat>
        <StatItem>
          <span>Followers</span>
          <UserStats>
            {new Intl.NumberFormat('en-US').format(stats.followers)}
          </UserStats>
        </StatItem>
        <StatItem>
          <span>Views</span>
          <UserStats>
            {new Intl.NumberFormat('en-US').format(stats.views)}
          </UserStats>
        </StatItem>
        <StatItem>
          <span>Likes</span>
          <UserStats>
            {new Intl.NumberFormat('en-US').format(stats.likes)}
          </UserStats>
        </StatItem>
      </UserStat>
    </ProfCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
