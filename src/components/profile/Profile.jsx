import PropTypes from 'prop-types';

import {
  Wrapper,
  InfoBlock,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  StatsList,
  StatsItem,
  StatsTitle,
  StatsValue,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <InfoBlock>
        <UserAvatar src={avatar} alt="User avatar" width="350" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </InfoBlock>

      <StatsList>
        <StatsItem>
          <StatsTitle>Followers</StatsTitle>
          <StatsValue>{stats.followers}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsTitle>Views</StatsTitle>
          <StatsValue>{stats.views}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsTitle>Likes</StatsTitle>
          <StatsValue>{stats.likes}</StatsValue>
        </StatsItem>
      </StatsList>
    </Wrapper>
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
  }),
};
