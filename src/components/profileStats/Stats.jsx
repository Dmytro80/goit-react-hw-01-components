import PropTypes from 'prop-types';
import { StatsList, StatsItem, StatsTitle, StatsValue } from './Stats.styled';

export const Stats = ({ stats: { followers, views, likes } }) => {
  return (
    <StatsList>
      <StatsItem>
        <StatsTitle>Followers</StatsTitle>
        <StatsValue>{followers}</StatsValue>
      </StatsItem>
      <StatsItem>
        <StatsTitle>Views</StatsTitle>
        <StatsValue>{views}</StatsValue>
      </StatsItem>
      <StatsItem>
        <StatsTitle>Likes</StatsTitle>
        <StatsValue>{likes}</StatsValue>
      </StatsItem>
    </StatsList>
  );
};
Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
